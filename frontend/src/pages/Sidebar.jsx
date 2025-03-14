import React from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[333px] h-screen border ">
      <Link to="/admin/foodList" className="underline">
        Food List
      </Link>
    </div>
  );
};

export default Sidebar;
