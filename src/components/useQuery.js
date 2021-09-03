import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new window.URLSearchParams(useLocation().search);
}

export default useQuery;
