import React from "react";
import { Link } from "react-router-dom";
function LoginNav() {
  return (
    <div>
      <Link to="/login">
        <h3>Login</h3>
      </Link>
    </div>
  );
}

export default LoginNav;
