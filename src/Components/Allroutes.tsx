import React from "react";
import { useRoutes } from "react-router-dom";
import BizzLogin from "./AuthPage/BizzLogin";
import BizzSignUp from "./AuthPage/BizzSignUp";
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
    {
      path: "/businessregister",
      element: <BizzSignUp />,
    },
    {
      path: "/businesslogin",
      element: <BizzLogin />,
    },
  ]);

  return elements;
};

export default Allroutes;
