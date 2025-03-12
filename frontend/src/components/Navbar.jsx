import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="flex justify-between align-middle">
      <img
        className="ml-10"
        height={"100px"}
        width="100px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F-aGyP3YeeKHHrz0TY-Y2AKSAguHtWkBNA&s"
        alt="logo"
      />
      <ul className="flex justify-between gap-6 py-6">
        <li className="active:underline" onClick={() => setMenu("Home")}>
          Home
        </li>
        <li
          className="active:underline active:border"
          onClick={() => setMenu("Menu")}
        >
          Menu
        </li>
        <li className="active:underline" onClick={() => setMenu("Mobile-app")}>
          Mobile-app
        </li>
        <li className="active:underline" onClick={() => setMenu("Contact Us")}>
          Contact Us
        </li>
      </ul>
      <div className="flex align-middle gap-14 py-4">
        <CiSearch className="h-10 w-10" />
        <div>
          <CiShoppingCart className="h-10 w-10" />
        </div>
        <button className="bg-orange-500 h-10 w-24 mr-14 rounded-full text-white hover:bg-orange-600 ">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
