import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { ContactPage } from "../pages/contato/ContactPage";
import { AboutPage } from "../pages/about/AboutPage";
import { ProjectsPage } from "../pages/projects/ProjectsPage";


export const Router: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Projetos" element={<ProjectsPage />} />
          <Route path="/Sobre" element={<AboutPage />} />
          <Route path="/Contato" element={<ContactPage />} />
  
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
