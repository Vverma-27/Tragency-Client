import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import styles from "../styles/Header.module.css";
import SearchBar from "./searchBar";
import { logout } from "../actions";

const Header = () => {
  const dispatch = useDispatch();
  const signout = useCallback(() => dispatch(logout()), [dispatch]);
  return (
    <header id={styles.header}>
      <Link to="/feed">
        <img src={Logo} alt="Logo Of Tragency" className="logo" />
      </Link>
      <SearchBar />
      <button onClick={() => signout()}>
        <FaSignOutAlt />
      </button>
    </header>
  );
};

export default Header;
