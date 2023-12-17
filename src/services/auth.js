import axiosInstance from './axiosService';

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

