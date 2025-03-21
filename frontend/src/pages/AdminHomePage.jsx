import React, { useState } from "react";
import FoodList from "./FoodList";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

//Admin home page with sidebar
const AdminHomePage = () => {
  const [sideBarList, setSideBarList] = useState(["foodlist"]);
  return (
    <div>
      <Sidebar />
      <FoodList />
    </div>
  );
};

export default AdminHomePage;
