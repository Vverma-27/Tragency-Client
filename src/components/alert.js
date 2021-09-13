import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { removeAlert } from "../actions";

const Alert = () => {
  const alerts = useSelector((state) => state.alerts);
  const dispatch = useDispatch();
  const alert = useCallback(
    (msg, type) => dispatch(removeAlert(msg, type)),
    [dispatch]
  );
  alerts.forEach(({ msg, alertType, id }) => {
    switch (alertType) {
      case "success":
        toast.success(msg);
        alert(id);
        return;
      case "warning":
        toast.warning(msg);
        alert(id);
        return;
      case "error":
        toast.error(msg);
        alert(id);
        return;
      default:
        return;
    }
  });
  return <ToastContainer></ToastContainer>;
};

export default Alert;
