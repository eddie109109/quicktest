import React from "react";
import EddieLogo from "../images/eddieLogo.png";
import "./NavBar.css";
import RegisterNav from "./RegisterNav";
import LoginNav from "./LoginNav";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar_eddieLogo_container">
          <Link to="/">
            <img className="navbar_eddieLogo" src={EddieLogo} alt="" />
          </Link>
        </div>
        <div className="navbar_RegisterNav">
          <RegisterNav />
        </div>
        <div className="navbar_LoginNav">
          <LoginNav />
        </div>
      </div>
      <hr className="navbar_hr"></hr>
    </div>
  );
}

export default NavBar;
