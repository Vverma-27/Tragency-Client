import axios from "axios";

export const auth = axios.create({
  baseURL: "/api/auth",
});
export const postsRoute = axios.create({
  baseURL: "/api/post",
});
