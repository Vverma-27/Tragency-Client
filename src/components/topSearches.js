import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../styles/Top.module.css";

const TopSearches = () => {
  return (
    <aside id={styles.container}>
      <section id={styles.heading}>
        <p className="heading_main" style={{ fontSize: "1.4rem" }}>
          Top Searches
        </p>
      </section>
      <Link to={`/results?query=j-and-k&type=images`}>
        <section class={styles.location}>
          Jammu {"&"} Kashmir <FaArrowCircleRight />
        </section>
      </Link>
      <Link to={`/results?query=ladakh&type=images`}>
        <section class={styles.location}>
          Ladakh
          <FaArrowCircleRight />
        </section>
      </Link>
      <Link to={`/results?query=goa&type=images`}>
        <section class={styles.location}>
          Goa
          <FaArrowCircleRight />
        </section>
      </Link>
      <Link to={`/results?query=maldives&type=images`}>
        <section class={styles.location}>
          Maldives <FaArrowCircleRight />
        </section>
      </Link>
      <Link to={`/results?query=dubai&type=images`}>
        <section class={styles.location}>
          Dubai <FaArrowCircleRight />
        </section>
      </Link>
      <Link to={`/results?query=germany&type=images`}>
        <section class={styles.location}>
          Germany <FaArrowCircleRight />
        </section>
      </Link>
    </aside>
  );
};

export default TopSearches;
