import React from "react";
import { Outlet } from "react-router-dom";
import About from "../About/About";


const MainLayout = () => {
  return (
    <div>
      <About />
      <Outlet />

    </div>
  );
};

export default MainLayout;
