  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import App from "./screens/Page";
  import AboutPage from './routes/AboutUsPage';  
  import CaseStudiesPage from './routes/CaseStudiesPage';  
  import ContactPage from './routes/ContactPage';  
  import Homepage from './routes/Homepage';  
  import ResourcesPage from './routes/ResourcesPage';  
  import ServicesPage from './routes/ServicesPage';  


  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import "./index.css";
  createRoot(document.getElementById("app")).render(
    <StrictMode>
      <Router>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
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
