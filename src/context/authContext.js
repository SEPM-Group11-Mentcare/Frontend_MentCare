import { createContext, useEffect, useState } from "react";
import * as axiosInstance from "../services/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [role, setRole] = useState(null);

  async function fetchData() {
    try {
      await axiosInstance
        .getProfile()
        .then((res) => {
          setUserInfo(res);
          console.log(res);
        })
        .catch((err) => {
          setUserInfo(null);
          console.log(err);
        });
    } catch (err) {
      setUserInfo(null);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  // console.log(userInfo);
  // console.log(role);

  return (
    <AuthContext.Provider value={{ userInfo, fetchData, setRole, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
