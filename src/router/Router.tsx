import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";
import { Index } from "../screens/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/portfolio-project" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
