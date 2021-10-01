import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { setAlert } from "../actions";

const ProtectedRoute = ({ component, ...props }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  //   console.log(isAuthenticated);
  const dispatch = useDispatch();
  const func = useCallback(
    () => dispatch(setAlert("User not logged in", "error")),
    [dispatch]
  );
  useEffect(() => {
    if (isAuthenticated === "false") {
      func();
    }
  }, [isAuthenticated, func]);
  return (
    <Route
      {...props}
      render={() => {
        return isAuthenticated === "true" ? (
          component()
        ) : (
          <Redirect to="/auth/signin" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
