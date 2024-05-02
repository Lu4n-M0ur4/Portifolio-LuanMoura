import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { ContactPage } from "../pages/contato/ContactPage";
import { AboutPage } from "../pages/about/AboutPage";
import { ProjectsPage } from "../pages/projects/ProjectsPage";
import { LayoutNotPage } from "../pages/layoutNot/LayoutNotPage";

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
          {/* <Route path="/FailLayout" element={<LayoutNotPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
