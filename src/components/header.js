import React from "react";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import styles from "../styles/Header.module.css";
import SearchBar from "./searchBar";

const Header = () => {
  return (
    <header id={styles.header}>
      <Link to="/">
        <img src={Logo} alt="Logo Of Tragency" className="logo" />
      </Link>
      <SearchBar />
      <FaSignOutAlt />
    </header>
  );
};

export default Header;
