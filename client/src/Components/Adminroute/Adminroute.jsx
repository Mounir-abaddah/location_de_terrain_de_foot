import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ProtectedRoute from "../../Components/ProtecteRoute";

const AdminRoute = (props) => {
  const { user } = useSelector((state) => state.user);

  if (user && user.isAdmin) {
    return <ProtectedRoute>{props.children}</ProtectedRoute>;
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminRoute;
