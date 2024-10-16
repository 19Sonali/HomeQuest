import React from "react";
import "./Layout.scss";
import Navbar from "../../components/Navbar/Navbar";
import HomePage from "../homePage/HomePage";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
