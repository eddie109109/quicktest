import React from "react";
import "./Footer.css";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      &copy; Copyright {currentYear} eddieprogramming
    </div>
  );
}

export default Footer;
