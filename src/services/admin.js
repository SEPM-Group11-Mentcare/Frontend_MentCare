import axiosInstance from './axiosService';

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