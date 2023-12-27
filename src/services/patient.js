import axiosInstance from './axiosService';

export const getTherapist = async(id) => {
  const res = await axiosInstance.get(`/patient/therapist/${id}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}

export const getTherapists = async() => {
  const res = await axiosInstance.get('/patient/view')

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}

export const getTherapistSchedule = async(id) => {
  const res = await axiosInstance.get(`/patient/schedule/${id}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}