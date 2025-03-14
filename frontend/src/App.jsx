import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./components/Login";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import AddFood from "./pages/AddFood";
import Footer from "./components/Footer";
import ProctectedRoutes from "./pages/ProctectedRoutes";
import UpdateFood from "./pages/UpdateFood";
import DeleteFoodItem from "./pages/DeleteFoodItem";
import FoodList from "./pages/FoodList";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProctectedRoutes />}>
          <Route path="/foodList" element={<FoodList />} />
          <Route path="/addFood" element={<AddFood />} />
          <Route path="/updateFood" element={<UpdateFood />} />
          <Route path="deleteFood" element={<DeleteFoodItem />} />
        </Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
