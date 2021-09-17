import React from "react";
import { useState, useEffect, useRef } from "react";

import { FaBars, FaWindowClose } from "react-icons/fa";
import styles from "../styles/Menu.module.css";
import Sidebar from "./sidebar";
const Menu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const clickFunc = (e) => {
      setShowSidebar(false);
    };
    const id = setTimeout(() => {
      ref.current.classList.remove(`${styles.active}`);
    }, 6000);
    document.querySelector("#root").addEventListener("click", clickFunc, true);
    return () => {
      document
        .querySelector("#root")
        .removeEventListener("click", clickFunc, true);
      clearTimeout(id);
    };
  }, []);
  useEffect(() => {
    document.querySelector("#root").style.overflowY = !showSidebar
      ? "scroll"
      : "hidden";
  }, [showSidebar]);
  const handleClick = (e) => {
    setShowSidebar(!showSidebar);
    // document.querySelector("#root").style.overflowY = showSidebar
    //   ? "scroll"
    //   : "hidden";
  };
  return (
    <>
      <section
        className={styles.menu}
        style={showSidebar ? { top: "0" } : {}}
        onClick={(e) => handleClick(e)}
      >
        {(!showSidebar && <FaBars />) || <FaWindowClose />}
      </section>
      <br />
      <br />
      <section class={`${styles.message} ${styles.active}`} ref={ref}>
        Click This To Open Sidebar
      </section>
      <br />
      <br />
      <section
        className={`${styles.overlay} ${styles[showSidebar ? "active" : ""]}`}
      >
        <Sidebar />
      </section>
      {/* <section style={{ height: "1000px" }}></section> */}
    </>
  );
};

export default Menu;
