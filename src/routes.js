import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../src/pages/Home";
import About from "../src/pages/About";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/home" exact />
        <Route element={<About />} path="/about" exact />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
