import React from "react";
import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="carrer-layout">
      <h2> Available carriers:</h2>
      <Outlet />
    </div>
  );
}
