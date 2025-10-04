import React from "react";
import logoImage from "/public/images/logo.png";

function Logo() {
  return (
    <a className="Header__logo logo" href="#">
      <img
        className="logo__image"
        src={logoImage}
        alt="Dashboard"
        width="170"
        height="40"
      />
    </a>
  );
}

export default Logo;
