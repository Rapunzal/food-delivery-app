import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import userStore from "../stores/UserStore";

//Protected routes based on role here admin
const ProctectedRoutes = () => {
  // const user = null;
  const { user } = userStore.getState();
  console.log(user, " ====adminprotected route");
  return user.role === "admin" ? <Outlet /> : <Navigate to="/login" />;
};

export default ProctectedRoutes;
