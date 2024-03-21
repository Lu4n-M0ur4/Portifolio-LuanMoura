import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomePage} from "../pages/home/HomePage"
import { Projects } from "../pages/projects/Projects";


export const Router:React.FC = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route index element={<HomePage/>}/>
    <Route path="/HomePage" element={<HomePage/>}/>
    <Route path="/Projects" element={<Projects/>}/>
  </Routes>
  
  </BrowserRouter>
  
  </>;
};

export default Router;
