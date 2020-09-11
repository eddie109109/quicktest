import React from "react";
import { Link } from "react-router-dom";

function RegisterNav() {
  return (
    <div>
      <Link to="/register">
        <h3>Register</h3>
      </Link>
    </div>
  );
}

export default RegisterNav;
