import { createContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  async function fetchData() {
    try {
      await axiosInstance
        .getProfile()
        .then((res) => {
          setUserInfo(res);
          // console.log(res);
        })
        .catch((err) => {
          setUserInfo(null);
          // console.log(err);
        });
    } catch (err) {
      setUserInfo(null);
      // console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(userInfo);

  return (
    <AuthContext.Provider value={{ userInfo, fetchData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
