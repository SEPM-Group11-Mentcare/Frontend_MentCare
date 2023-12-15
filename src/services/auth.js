import axiosInstance from './axiosService';

export const signupTherapist = async (username, name, password,nationalID,specialization,pratisingCertNum) => {
    const role = "Therapist";
    const res = await axiosInstance.post("account/signup", {
      username,
      name,
      password,
      role,
      nationalID,
      specialization,
      pratisingCertNum
    });

    try {
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return err;
    }
  };

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
