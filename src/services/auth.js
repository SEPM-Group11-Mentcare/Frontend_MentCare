import axiosInstance from './axiosService';

export const signin = async(username, password) => {
  const res = await axiosInstance.post("account/signin", {username, password})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}

export const signup = async(role, username, name, password, nationalID, specialization, pratisingCertNum) => {
  const res = await axiosInstance.post(`account/signup/${role}`, {username, name, password, nationalID, specialization, pratisingCertNum})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}

