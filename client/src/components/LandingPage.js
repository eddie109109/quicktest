import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="landingPage_title">
        <h1 className="landingPage_title_text">Welcome to Edsbook!</h1>
        <h3>A place to connect you and your English learning friends!</h3>
      </div>
      <div className="landingPage_reg_login_container">
        <div className="ladingPage_register">
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="ladingPage_login">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
