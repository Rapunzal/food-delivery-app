import React from "react";
import Menu from "../pages/Menu";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/menu");
  }
  return (
    <div>
      <div className="relative">
        <img
          src="https://png.pngtree.com/background/20210710/original/pngtree-fast-food-light-yellow-hamburger-coke-chips-hot-coffee-tomato-sauce-picture-image_981064.jpg"
          alt="burger"
          className="h-[600px] w-full object-cover"
        />
        <div className="absolute top-36 left-64 z-1">
          <p>Quick Bites, Big Delights. A taste you'll remember.</p>
          <button
            className=" bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-2"
            onClick={handleClick}
          >
            Start Order Here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
