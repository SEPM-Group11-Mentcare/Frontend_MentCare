import axiosInstance from './axiosService';

export const getTherapistRequestList = async(status) => {
  const res = await axiosInstance.get(`admin/requests/?status=${status}`)
  try {
      if (res.status === 200) {
        return res.data;
      }
    } catch (err) {
      return err;
    }
}

export const changeTherapistStatus = async(therapistID, newStatus) => {
  const res = await axiosInstance.put("admin/updatestatus", {
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