import React from "react";
import SideBar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-cols-6  border border-yellow-400 h-full ">
      <SideBar />
      <Outlet/>
    </div>
  );
};

export default Body;
