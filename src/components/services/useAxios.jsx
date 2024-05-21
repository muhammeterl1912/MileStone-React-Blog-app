
import axios from "axios";


const useAxios = () => {
const token = localStorage.getItem("token",)

  const axiosToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  });

  const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });

  return { axiosToken, axiosPublic };
};

export default useAxios;
