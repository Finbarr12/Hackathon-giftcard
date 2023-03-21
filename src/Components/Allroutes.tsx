import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./AuthPage/Login";
import Signup from "./AuthPage/Signup";

const Allroutes = () => {
  const elements = useRoutes([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return elements;
};

export default Allroutes;
