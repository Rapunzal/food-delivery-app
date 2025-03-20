import React from "react";
import { NavLink, Link } from "react-router-dom";
import { CiViewList } from "react-icons/ci";
import { MdOutlineAddBox } from "react-icons/md";

const Sidebar = () => {
  return (
    <div
      className="w-52
      border border-t-0 py-10"
    >
      <Link to="/admin/foodList" className="underline ">
        <div className="flex gap-2">
          <CiViewList className="w-6 h-6" /> Food List
        </div>
      </Link>
      <br />
      <Link to="/admin/addFood" className="underline flex gap-2">
        <MdOutlineAddBox className="w-6 h-6" />
        Add Food item
      </Link>
      <br />
      {/* <Link to="/admin/updateFood" className="underline">
        Update Food item
      </Link>
      <br /> */}
    </div>
  );
};

export default Sidebar;
