import React from "react";
import Allroutes from "./Components/Allroutes";
import Signup from "./Components/AuthPage/Signup";
import DashboardRoutes from "./Components/Dashroutes";

const App = () => {
  return (
    <div>
      <Allroutes />
      <DashboardRoutes/>
    </div>
  );
};

export default App;
