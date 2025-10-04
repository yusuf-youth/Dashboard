import React from "react";

function BurgerButton() {
  return (
    <button className="header__burger-button burger-button visible-mobile">
      <span className="visually-hidden">Menu</span>
      <span className="burger-button__line"></span>
    </button>
  );
}

export default BurgerButton;
