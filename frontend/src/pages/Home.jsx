import React, { useEffect } from "react";
import Header from "../components/Header";
import foodItemsStore from "../stores/FoodItemStores.jsx";
import axios from "axios";
import Menu from "./Menu.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
};

export default Home;
