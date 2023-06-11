import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
