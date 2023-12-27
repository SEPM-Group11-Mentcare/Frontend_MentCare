import axiosInstance from './axiosService';

export const getScheduleTime = async(id) => {
  const res = await axiosInstance.get(`/schedule/${id}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}