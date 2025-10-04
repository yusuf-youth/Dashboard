import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ text, icon: Icon, to, isActive, modifierClass="" }) => {
  const linkClasses = `sidebar__link sidebar-link ${
    isActive ? "sidebar-link--active" : ""
  }`;

  return (
    <Link
      to={to}
      className={`${linkClasses} ${modifierClass}`}
      role="link"
      aria-current={isActive ? "page" : undefined}
    >
      <div className="sidebar-link__icon">
        <Icon />
      </div>
      <span className="sidebar-link__text">{text}</span>
    </Link>
  );
};

export default SidebarLink;
