import axios from "axios";
// import.meta.env;

export const makeRequest = axios.create({
  baseURL : `${import.meta.env.VITE_API_URL}/`,
  headers:{
     Authorization: "bearer "+ `${import.meta.env.VITE_API_TOKEN}`,
  },
});