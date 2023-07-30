import axios from "axios";

const API = axios.create({baseURL: process.env.REACT_APP_API_URL });
export const getTimelinePosts = (config) => API.get("/api/posts", config);
export const likePost = (id, userId, config) => API.post(`/api/posts/${id}/like?username=${userId}`, config);
export const unlikePost = (id, userId, config) => API.post(`/api/posts/${id}/unlike?username=${userId}`, config);
