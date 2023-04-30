import React from "react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <header>
      <nav className="navbar">
        <h1>PracaSzukaRobala</h1>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">help</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
