import axios from "axios";

export const auth = axios.create({
  baseURL: "/auth",
});
export const postsRoute = axios.create({
  baseURL: "/post",
});
