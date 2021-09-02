import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import styles from "../styles/Top.module.css";

const TopSearches = () => {
  return (
    <aside id={styles.container}>
      <section id={styles.heading}>
        <p className="heading_main" style={{ fontSize: "1.4rem" }}>
          Top Searches
        </p>
      </section>
      <section class={styles.location}>
        Jammu {"&"} Kashmir <FaArrowCircleRight />
      </section>
      <section class={styles.location}>
        Ladakh
        <FaArrowCircleRight />
      </section>
      <section class={styles.location}>
        Goa
        <FaArrowCircleRight />
      </section>
      <section class={styles.location}>
        Maldives <FaArrowCircleRight />
      </section>
      <section class={styles.location}>
        Dubai <FaArrowCircleRight />
      </section>
      <section class={styles.location}>
        Germany <FaArrowCircleRight />
      </section>
    </aside>
  );
};

export default TopSearches;
