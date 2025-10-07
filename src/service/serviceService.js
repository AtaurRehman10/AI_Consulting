import { 
     collection, 
     addDoc, 
     getDocs, 
     doc, 
     updateDoc, 
     deleteDoc,
     serverTimestamp,
     orderBy,
     query
   } from 'firebase/firestore';
   import { 
     ref, 
     uploadBytes, 
     getDownloadURL, 
     deleteObject 
   } from 'firebase/storage';
   import { db, storage } from '../firebase/firebase';
   
   const COLLECTION_NAME = 'services';
   
   // Upload image to Firebase Storage
   const uploadImage = async (file, serviceId) => {
     try {
       const timestamp = Date.now();
       const fileName = `${serviceId}_${timestamp}_${file.name}`;
       const storageRef = ref(storage, `services/${fileName}`);
       
       await uploadBytes(storageRef, file);
       const downloadURL = await getDownloadURL(storageRef);
       
       return {
         url: downloadURL,
         path: `services/${fileName}`
       };
     } catch (error) {
       console.error('Error uploading image:', error);
       throw error;
     }
   };
   
   // Delete image from Firebase Storage
   const deleteImage = async (imagePath) => {
     try {
       if (!imagePath) return;
       const imageRef = ref(storage, imagePath);
       await deleteObject(imageRef);
     } catch (error) {
       console.error('Error deleting image:', error);
       // Don't throw error if image doesn't exist
       if (error.code !== 'storage/object-not-found') {
         throw error;
       }
     }
   };
   
   // Get all services
   export const getAllServices = async () => {
     try {
       const servicesRef = collection(db, COLLECTION_NAME);
       const q = query(servicesRef, orderBy('createdAt', 'desc'));
       const querySnapshot = await getDocs(q);
       
       const services = [];
       querySnapshot.forEach((doc) => {
         services.push({
           id: doc.id,
           ...doc.data()
         });
       });
       
       return services;
     } catch (error) {
       console.error('Error getting services:', error);
       throw error;
     }
   };
   
   // Add new service
   export const addService = async (serviceData, imageFile) => {
     try {
       // First create the document to get an ID
       const docRef = await addDoc(collection(db, COLLECTION_NAME), {
         name: serviceData.name,
         logoId: serviceData.logoId,
         problem: serviceData.problem,
         solution: serviceData.solution,
         points: serviceData.points,
         imageUrl: null,
         imagePath: null,
         createdAt: serverTimestamp(),
         updatedAt: serverTimestamp()
       });
       
       // Upload image if provided
       if (imageFile) {
         const imageData = await uploadImage(imageFile, docRef.id);
         
         // Update document with image URL and path
         await updateDoc(docRef, {
           imageUrl: imageData.url,
           imagePath: imageData.path
         });
       }
       
       return docRef.id;
     } catch (error) {
       console.error('Error adding service:', error);
       throw error;
     }
   };
   
   // Update existing service
   export const updateService = async (serviceId, serviceData, imageFile, oldImagePath) => {
     try {
       const serviceRef = doc(db, COLLECTION_NAME, serviceId);
       const updateData = {
         name: serviceData.name,
         logoId: serviceData.logoId,
         problem: serviceData.problem,
         solution: serviceData.solution,
         points: serviceData.points,
         updatedAt: serverTimestamp()
       };
       
       // If new image is provided
       if (imageFile) {
         // Delete old image if exists
         if (oldImagePath) {
           await deleteImage(oldImagePath);
         }
         
         // Upload new image
         const imageData = await uploadImage(imageFile, serviceId);
         updateData.imageUrl = imageData.url;
         updateData.imagePath = imageData.path;
       }
       
       await updateDoc(serviceRef, updateData);
       
       return true;
     } catch (error) {
       console.error('Error updating service:', error);
       throw error;
     }
   };
   
   // Delete service
   export const deleteService = async (serviceId, imagePath) => {
     try {
       // Delete image if exists
       if (imagePath) {
         await deleteImage(imagePath);
       }
       
       // Delete document
       const serviceRef = doc(db, COLLECTION_NAME, serviceId);
       await deleteDoc(serviceRef);
       
       return true;
     } catch (error) {
       console.error('Error deleting service:', error);
       throw error;
     }
   };