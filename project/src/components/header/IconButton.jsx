import React from "react";

const IconButton = ({
  children,
  className = "",
  type,
  onClick,
  ariaLabel,
  ...rest
}) => {
  return (
    <button
      className={`icon-button ${className}`}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      title={ariaLabel}
      {...rest}
    >
      <span className="visually-hidden">{ariaLabel}</span>
      {children}
    </button>
  );
};

export default IconButton;
