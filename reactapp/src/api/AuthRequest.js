import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const logIn = (formData) => API.post("/api/authenticate", formData);
export const userDetails = (formData) => API.post("/api/user/details", formData);
export const signUp = (formData) => API.post("/api/register", formData);