import { useState } from "react";
import classes from "./Navbar.module.scss";
import menuIcon from "../../assets/icons/menuIcon.svg";
import closeMenuIcon from "../../assets/icons/closeMenuIcon.svg";
import logo from "../../assets/icons/logo.svg";
import GetRandomBeer from "../GetRandomBeer/GetRandomBeer";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className={classes.root}>
      <img className={classes.logo} src={logo} alt="beer logo" />
      <h1>
        <Link to="/">BeerApp</Link>
      </h1>
      <button className={classes.menuOpenIcon} onClick={toggleMobileMenu}>
        <img src={menuIcon} alt="menu icon" />
      </button>
      <div
        className={`${classes.menu} ${isMobileMenuOpen ? classes.active : ""}`}
      >
        <button className={classes.menuCloseIcon} onClick={toggleMobileMenu}>
          <img src={closeMenuIcon} alt="menu icon" />
        </button>
        <ul>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <GetRandomBeer />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
