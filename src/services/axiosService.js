import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000/api/",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers.authorization = Cookies.get("token");
  return config;
});

export const signupPatient = async (username, name, password) => {
  const res = await axiosInstance.post("account/signup/patient", {
    username,
    name,
    password,
  });
  
  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const signin = async (username, password) => {
  const res = await axiosInstance.post("account/signin", {
    username,
    password,
  });

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};
