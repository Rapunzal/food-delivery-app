import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
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
import AdminHomePage from "./pages/AdminHomePage";
import AdminLayout from "./pages/AdminLayout";
import Sidebar from "./pages/Sidebar";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  let location = useLocation();
  // Array of paths where the navbar should be hidden
  const excludedPaths = [
    "/admin",
    "/admin/foodList",
    "/admin/addFood",
    "/admin/updateFood",
    "/admin/deleteFood",
  ];

  // Check if the current path is in the excluded paths
  const shouldShowNavbar = excludedPaths.includes(location.pathname);

  return (
    <div>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="flex">
        {shouldShowNavbar && <Sidebar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProctectedRoutes />}>
            <Route path="/admin" element={<AdminLayout />} />
            <Route path="/admin/foodList" element={<FoodList />} />
            <Route path="/admin/addFood" element={<AddFood />} />
            <Route path="/admin/updateFood" element={<UpdateFood />} />
            <Route path="/admin/deleteFood" element={<DeleteFoodItem />} />
          </Route>

          <Route path="/menu" element={<Menu />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
