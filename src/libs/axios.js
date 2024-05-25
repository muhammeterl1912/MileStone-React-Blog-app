import axios from "axios";

const axiosToken = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});

axiosToken.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
});

export { axiosToken };

export const axiosPublic = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
});
