import React from "react";
import Allroutes from "./Components/Allroutes";
import DashboardRoutes from "./Components/Dashroutes";
import UserDashRoute from "./Components/UserDashboard/UserDashRoute";

const App = () => {
  return (
    <div>
      <Allroutes />
      <DashboardRoutes />
      <UserDashRoute />
    </div>
  );
};

export default App;
