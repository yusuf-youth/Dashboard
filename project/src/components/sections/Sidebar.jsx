import UserProfileCard from "../sidebar/UserProfileCard";
import {
  LOGOUT_ITEM,
  SIDEBAR_NAV_ITEMS,
  USER_DATA,
} from "../../script/constants";
import SidebarLink from "../sidebar/SidebarLink";
import { useLocation } from "react-router";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <UserProfileCard
        avatarImage={USER_DATA.avatarImage}
        name={USER_DATA.name}
        email={USER_DATA.email}
        imgWidth={86}
        imgHeight={86}
      />
      <nav className="sidebar__menu">
        <ul className="sidebar__list">
          {SIDEBAR_NAV_ITEMS.map((item) => {
            return (
              <li className="sidebar__item" key={item.id}>
                <SidebarLink
                  key={item.id}
                  text={item.text}
                  icon={item.icon}
                  to={item.path}
                  isActive={
                    location.pathname === item.path ||
                    (location.pathname === "/" && item.path === "/dashboard")
                  }
                />
              </li>
            );
          })}
        </ul>
      </nav>
      <SidebarLink
        text={LOGOUT_ITEM.text}
        icon={LOGOUT_ITEM.icon}
        to={LOGOUT_ITEM.path}
        modifierClass="sidebar__link--logout"
      />
    </aside>
  );
}

export default Sidebar;
