import React from "react";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="w-52
      border border-t-0"
    >
      <Link to="/admin/foodList" className="underline font-semibold">
        Food List
      </Link>
      <br />
      <Link to="/admin/addFood" className="underline">
        Add Food item
      </Link>
      <br />
      <Link to="/admin/updateFood" className="underline">
        Update Food item
      </Link>
      <br />
    </div>
  );
};

export default Sidebar;
