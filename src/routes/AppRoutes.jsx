import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";
import GisServices from "../pages/GisServices.jsx";
import Gallery from "../pages/Gallery.jsx";
import Achievements from "../pages/Achievements.jsx";
import Contact from "../pages/Contact.jsx";
import Facts from "../pages/Facts.jsx";

// One route per page from the design (01_home ... 08_contact).
// No layout/content built yet — each page is a placeholder stub.
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
      <Route path="/gis-services" element={<GisServices />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/facts" element={<Facts />} />
    </Routes>
  );
}
