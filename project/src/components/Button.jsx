import React from "react";

function Button({ className, onClick, type="button", children }) {
  return (
    <button className={`${className} button`} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
