import axios from "axios";

export const auth = axios.create({
  baseURL: "/api/auth",
});
export const postsRoute = axios.create({
  baseURL: "/api/post",
});
export const chatsRoute = axios.create({
  baseURL: "/api/rooms",
});
export const diaryRoute = axios.create({
  baseURL: "/api/diary",
});
export const profileRoute = axios.create({
  baseURL: "/api/profile",
});
