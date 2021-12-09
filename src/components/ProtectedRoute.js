import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  console.log(props.children);
  return (
    props.loggedIn === true ? props.children : <Navigate to="/login" />
  );
}

export default ProtectedRoute;
