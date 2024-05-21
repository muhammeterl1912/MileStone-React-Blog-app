import axios from "axios";


const token = localStorage.getItem("token")


export const axiosToken = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
    headers: { Authorization: `Token ${token}` },
  })


 export const axiosPublic = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}`,
  });


