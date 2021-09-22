import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert, signUp } from "../actions";
import styles from "../styles/Auth.module.css";
import Image from "../images/Image1.svg";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const alert = useCallback(
    (msg, type) => dispatch(setAlert(msg, type)),
    [dispatch]
  );
  const register = useCallback(
    (formValues) => dispatch(signUp(formValues)),
    [dispatch]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      username.indexOf(" ") !== -1 ||
      username.indexOf("\t") !== -1 ||
      username.indexOf("\r") !== -1
    )
      alert("Username cannot contain whitespaces", "error");
    else if (password !== cpassword) alert("Passwords do not match", "error");
    else register({ username, email, password });
  };
  return (
    <section className={styles.backgroundOverlay}>
      <section className={styles.overlay}></section>
      {window.innerWidth < 671 ? (
        <>
          <div className={styles.circleOne}></div>
          <div className={styles.circleTwo}></div>
        </>
      ) : (
        ""
      )}
      <section className={styles.mainContainer}>
        {window.innerWidth >= 671 ? (
          <>
            <section className={styles.overlay2}></section>
            <img src={Image} alt="Traveller" className={styles.image} />
          </>
        ) : (
          ""
        )}
        <form
          className={`${styles.formContainer} ${styles.signup}`}
          onSubmit={handleSubmit}
        >
          <h1 className={styles.heading}>Signup</h1>
          <label htmlFor="text" className={styles.label}>
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required={true}
            type="text"
            className={styles.input}
            name="text"
            placeholder="Enter Your Username"
          />
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            type="email"
            className={styles.input}
            name="email"
            placeholder="Enter Your Email"
          />
          <section style={{ position: "relative", marginBottom: "1vh" }}>
            <label
              className={styles.eye}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              <FaEye />
            </label>
            <label className={styles.label} htmlFor="password">
              Password
            </label>
            <input
              style={{ marginBottom: "0" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
              type={(!showPassword && "password") || "text"}
              name="password"
              className={styles.input}
              placeholder="Enter Your Password"
            />
          </section>
          <section style={{ position: "relative", marginBottom: "2vh" }}>
            <label
              className={styles.eye}
              onClick={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            >
              <FaEye />
            </label>
            <label className={styles.label} htmlFor="confirm_pass">
              Confirm Password
            </label>
            <input
              style={{ marginBottom: "0" }}
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              required={true}
              type={(!showConfirmPassword && "password") || "text"}
              name="confirm_pass"
              className={styles.input}
              placeholder="Confirm Your Password"
            />
          </section>
          <button type="submit" className={`buttonSubmit ${styles.button}`}>
            Signup
          </button>
          <p className={styles.note}>
            Already have an account?{" "}
            <Link to="/auth/signin">
              <span className="blue">Login Here</span>
            </Link>
          </p>
        </form>
      </section>
    </section>
  );
};

export default SignUp;
