import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import EddieLogo from "../../images/eddieLogo.png";
function Login() {
  return (
    <div className="login">
      <div className="login_title">
        <div className="login_title_logo_container">
          <img className="login_title_logo" src={EddieLogo} alt="logo" />
        </div>
        <div className="login_title_text_container">
          <h1 className="login_title_text">Log In</h1>
        </div>
      </div>
      <div className="login_form_container">
        <form className="login_form">
          <input
            className="login_form_username"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="login_form_email"
            type="text"
            placeholder="Email"
            required
          />
          <input
            className="login_form_password"
            type="password"
            placeholder="Password"
            required
          />

          <button className="login_button">Login</button>
        </form>
        <div className="login_redirectMessage">
          <h2>
            <Link to="/register"> Don't have an account?</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
