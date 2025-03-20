import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link, NavLink, useNavigate } from "react-router-dom";
import userStore from "../stores/UserStore";
import foodItemsStore from "../stores/FoodItemStores";

const Navbar = ({ setShowLogin }) => {
  const { user, setIsLoggedIn } = userStore.getState();
  const isLoggedIn = userStore((state) => state.isLoggedIn);
  const { foodItems, fetchData, isLoading } = foodItemsStore.getState();
  const [menu, setMenu] = useState("Home");
  const { logout } = userStore.getState();
  const navigate = useNavigate();
  function handleMenu() {
    setMenu("Menu");
    fetchData();
  }
  function handleLogout() {
    logout();
    setIsLoggedIn(false);
    navigate("/");
  }
  console.log("navbar isLoggedIn", isLoggedIn);
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <div className="flex justify-between align-middle border text-gray-700">
      <Link to="/">
        <img height={"200px"} width="200px" src="/subereats2.png" alt="logo" />
      </Link>
      <ul className="flex justify-between gap-6 py-6">
        <NavLink
          activeclassname="active"
          to={"/"}
          className="active:underline"
          onClick={() => setMenu("Home")}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to={"/menu"}
          className="active:underline active:border "
          activestyle={{ color: "red" }}
          onClick={() => {
            handleMenu;
          }}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Menu
        </NavLink>
        <NavLink
          to="/order"
          className="active:underline "
          onClick={() => setMenu("Mobile-app")}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Orders
        </NavLink>
        <NavLink
          to="/contact-us"
          className="active:underline "
          onClick={() => setMenu("Contact Us")}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Contact Us
        </NavLink>
      </ul>
      <div className="flex align-middle gap-14 py-4">
        {/* <CiSearch className="h-10 w-10" /> */}
        <div> {user && `Hi, ${user.name}`}</div>
        <div>
          <Link to="/cart">
            <CiShoppingCart className="h-10 w-10" />
          </Link>
        </div>
        {!isLoggedIn && (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-orange-500 h-10 w-24  rounded-full text-white hover:bg-orange-600 "
          >
            Sign In
          </button>
        )}
        {/* <p>Hi {user.email}</p> */}
        <button
          onClick={handleLogout}
          className="bg-orange-500 h-10 w-24 mr-2 rounded-full text-white hover:bg-orange-600 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
