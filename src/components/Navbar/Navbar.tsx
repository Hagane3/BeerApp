import { useState, useEffect } from "react";
import classes from "./Navbar.module.scss";
import menuIcon from "../../assets/icons/menuIcon.svg";
import closeMenuIcon from "../../assets/icons/closeMenuIcon.svg";
import logo from "../../assets/icons/logo.svg";
import GetRandomBeer from "../GetRandomBeer/GetRandomBeer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={classes.root}>
      <img className={classes.logo} src={logo} alt="beer logo" />
      <h1>
        <Link to="/">BeerApp</Link>
      </h1>
      <button
        className={classes.menuOpenIcon}
        onClick={toggleMobileMenu}
        data-testid="menu open"
      >
        <img src={menuIcon} alt="menu icon" />
      </button>
      <div
        className={`${classes.menu} ${isMobileMenuOpen ? classes.active : ""}`}
      >
        <button
          className={classes.menuCloseIcon}
          onClick={toggleMobileMenu}
          data-testid="menu close"
        >
          <img src={closeMenuIcon} alt="menu icon" />
        </button>
        <ul>
          <li>
            <Link to="/about" data-testid="mobile menu">
              About us
            </Link>
          </li>
          <GetRandomBeer />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
