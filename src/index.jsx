  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import SignInPage from "./screens/SignInPage";
  import AboutPage from './routes/AboutUsPage';  
  import CaseStudiesPage from './routes/CaseStudiesPage';  
  import ContactPage from './routes/ContactPage';  
  import Homepage from './routes/Homepage';  
  import ResourcesPage from './routes/ResourcesPage';  
  import ServicesPage from './routes/ServicesPage';  
  import AdminDashboard from './routes/Dashborad';
  import ScrollToTop from './component/ScrollToTop';


  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import "./index.css";
  createRoot(document.getElementById("app")).render(
    <StrictMode>  
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/admin-core-0004" element={<SignInPage />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </StrictMode>
  );
