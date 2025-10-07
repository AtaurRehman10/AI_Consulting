import { 
     doc, 
     getDoc, 
     setDoc,
     serverTimestamp
   } from 'firebase/firestore';
   import { db } from '../firebase/firebase';
   
   const DOCUMENT_ID = 'companyProfile'; // Single document for company profile
   const COLLECTION_NAME = 'settings';
   
   // Get company profile
   export const getCompanyProfile = async () => {
     try {
       const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);
       const docSnap = await getDoc(docRef);
       
       if (docSnap.exists()) {
         return {
           id: docSnap.id,
           ...docSnap.data()
         };
       } else {
         // Return default structure if document doesn't exist
         return {
           companyName: "",
           completeProjects: "",
           headline: "",
           description: "",
           teamMembers: []
         };
       }
     } catch (error) {
       console.error('Error getting company profile:', error);
       throw error;
     }
   };
   
   // Save/Update company profile
   export const saveCompanyProfile = async (profileData) => {
     try {
       const docRef = doc(db, COLLECTION_NAME, DOCUMENT_ID);
       
       await setDoc(docRef, {
         ...profileData,
         updatedAt: serverTimestamp()
       }, { merge: true }); // merge: true will update existing fields or create new document
       
       return true;
     } catch (error) {
       console.error('Error saving company profile:', error);
       throw error;
     }
   };