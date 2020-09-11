import React from "react";
import "./Register.css";
import EddieLogo from "../../images/eddieLogo.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="register_title">
        <div className="register_title_logo_container">
          <img className="register_title_logo" src={EddieLogo} alt="logo" />
        </div>
        <div className="register_title_text_container">
          <h1 className="register_title_text">Sign Up</h1>
        </div>
      </div>
      <div className="register_form_container">
        <form className="register_form">
          <input
            className="register_form_username"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="register_form_email"
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="register_form_password"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="register_form_password2"
            type="password"
            placeholder="Confirm Password"
            required
          />

          <button className="register_button">Register</button>
        </form>
        <div className="register_redirectMessage">
          <h2>
            <Link to="/login"> Already have an account?</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Register;
