import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions";
import styles from "../styles/Auth.module.css";
import Image from "../images/Image2.svg";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const login = useCallback(
    (msg, type) => dispatch(signin(msg, type)),
    [dispatch]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <section className={styles.backgroundOverlay}>
      <section className={styles.overlay}></section>
      <section className={styles.mainContainer}>
        {window.innerWidth >= 767 ? (
          <>
            <section className={styles.overlay2}></section>
            <img src={Image} alt="Traveller" className={styles.image} />
          </>
        ) : (
          ""
        )}
        <form
          className={`${styles.formContainer} ${styles.formContainerIn}`}
          onSubmit={handleSubmit}
        >
          <h1 className={`${styles.headingIn} ${styles.heading}`}>Login</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            type="email"
            className={styles.input}
            name="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            type="password"
            name="password"
            className={`${styles.input} ${styles.inputIn}`}
            placeholder="Enter Your Password"
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
          <p className={styles.note}>
            Don't have an account?{" "}
            <Link to="/auth/signup">
              <span className="blue">Register Here</span>
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
};

export default SignIn;