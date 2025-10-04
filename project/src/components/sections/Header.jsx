import IconButton from "../header/IconButton";
import DateDisplay from "../header/DateDisplay";
import BurgerButton from "../header/BurgerButton";
import { BellIcon, CalendarIcon } from "../../script/constants";
import Logo from "../header/Logo";
import SearchBar from "../header/SearchBar";

function Header() {
  return (
    <header className="header">
      <Logo />
      <SearchBar />
      <div className="header__actions hidden-mobile">
        <div className="header__button-group">
          <IconButton ariaLabel="Nofications">{<BellIcon />}</IconButton>
          <IconButton ariaLabel="Calendar">{<CalendarIcon />}</IconButton>
        </div>
        <DateDisplay />
      </div>
      {/* <BurgerButton /> */}
    </header>
  );
}

export default Header;
