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

export const getTherapistRequestList = async () => {
    const res = await axiosInstance.get("account/gettherapistrequest")
    try {
        if (res.status === 200) {
          return res;
        }
      } catch (err) {
        return err;
      }
}

export const changeTherapistStatus = async(therapistID, newStatus) => {
    const res = await axiosInstance.post("account/updatestatus", {
        therapistID, newStatus
    });
    try {
        if (res.status === 200) {
            return res;
        }
    } catch(err) {
        return err;
    }
}
