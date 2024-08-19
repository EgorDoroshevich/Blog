import axios from "axios";

const API = axios.create({
  baseURL: "https://studapi.teachmeskills.by",
});

export const getPosts = () => {
  return API.get("/blog/posts", {});
};
