import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const getUser = (username, config) => API.get(`/api/users/${username}`, config);