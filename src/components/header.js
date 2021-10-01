import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import styles from "../styles/Header.module.css";
import SearchBar from "./searchBar";
import { logout } from "../actions";

const Header = () => {
  const dispatch = useDispatch();
  const signout = useCallback(() => dispatch(logout()), [dispatch]);
  const isLoggedIn = localStorage.getItem("isAuthenticated");
  return (
    <header id={styles.header}>
      <Link to="/feed">
        <img src={Logo} alt="Logo Of Tragency" className="logo" />
      </Link>
      <SearchBar />
      {isLoggedIn === "true" ? (
        <button
          onClick={() => signout()}
          className="sub-heading"
          style={{
            backgroundColor: "rgba(108, 99, 255, 1)",
            borderRadius: " 8px",
            fontSize: " 1.5rem",
            padding: " 1rem",
            color: " #fff",
            float: " right",
            marginTop: "0.7rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Sign Out
          <FaSignOutAlt />
        </button>
      ) : (
        <Link to="auth/signin">
          <a
            href="mailto:vihaan.verma@tragency.in"
            className="sub-heading"
            style={{
              backgroundColor: "rgba(108, 99, 255, 1)",
              borderRadius: " 8px",
              fontSize: " 1.5rem",
              padding: " 1rem",
              color: " #fff",
              float: " right",
              marginTop: "0.7rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Sign In <FaSignInAlt />
          </a>
        </Link>
      )}
    </header>
  );
};

export default Header;
