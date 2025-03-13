import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import userStore from "../stores/UserStore";
import foodItemsStore from "../stores/FoodItemStores";

const Navbar = ({ setShowLogin }) => {
  const { foodItems, fetchData, isLoading } = foodItemsStore.getState();
  const [menu, setMenu] = useState("Home");
  const { logout } = userStore.getState();
  function handleMenu() {
    setMenu("Menu");
    fetchData();
  }
  return (
    <div className="flex justify-between align-middle">
      <Link to="/">
        <img
          className="ml-10"
          height={"100px"}
          width="100px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3F-aGyP3YeeKHHrz0TY-Y2AKSAguHtWkBNA&s"
          alt="logo"
        />
      </Link>
      <ul className="flex justify-between gap-6 py-6">
        <NavLink
          activeclassname="active"
          to={"/"}
          className="active:underline"
          onClick={() => setMenu("Home")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/menu"}
          className="active:underline active:border"
          activestyle={{ color: "red" }}
          onClick={() => {
            handleMenu;
          }}
        >
          Menu
        </NavLink>
        <NavLink
          className="active:underline"
          onClick={() => setMenu("Mobile-app")}
        >
          Mobile-app
        </NavLink>
        <NavLink
          to="/contact-us"
          className="active:underline"
          onClick={() => setMenu("Contact Us")}
        >
          Contact Us
        </NavLink>
      </ul>
      <div className="flex align-middle gap-14 py-4">
        <CiSearch className="h-10 w-10" />
        <div>
          <Link to="/cart">
            <CiShoppingCart className="h-10 w-10" />
          </Link>
        </div>
        <button
          onClick={() => setShowLogin(true)}
          className="bg-orange-500 h-10 w-24  rounded-full text-white hover:bg-orange-600 "
        >
          Sign In
        </button>
        <button
          onClick={() => logout()}
          className="bg-orange-500 h-10 w-24 mr-2 rounded-full text-white hover:bg-orange-600 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
