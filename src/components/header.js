import React from "react";
import { FaSearch, FaSignOutAlt } from "react-icons/fa";
import Logo from "../images/Logo.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header id={styles.header}>
      <img src={Logo} alt="Logo Of Tragency" className="logo" />
      <form id={styles.searchBar}>
        <input
          type="text"
          id={styles.search}
          placeholder="Search For Content"
        />
        <FaSearch />
      </form>
      <FaSignOutAlt />
    </header>
  );
};

export default Header;
