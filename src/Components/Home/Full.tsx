import React from "react";

interface iDisplay {
  sow: boolean;
}
const Full: React.FC<iDisplay> = ({ sow }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "rgba(7, 1, 1, 0.6)",
        position: "absolute",
        zIndex: "7",
      }}
    ></div>
  );
};

export default Full;
