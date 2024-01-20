import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://g11-mindheal.vercel.app/api/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers.authorization = Cookies.get("token");
  return config;
});

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

export default axiosInstance;
