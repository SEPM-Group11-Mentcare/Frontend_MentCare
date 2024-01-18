import axiosInstance from './axiosService';

export const bookAppointment = async(therapist, schedule, note, accept, total) => {
  const res = await axiosInstance.post('/patient/booking', {therapist, schedule, note, accept, total})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}

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

export const getAppointments = async(status) => {
  const res = await axiosInstance.get(`/patient/appointments/?status=${status}`)

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}

export const cancelAppointment = async(appointmentID) => {
  const res = await axiosInstance.put(`/patient/appointment`, {appointmentID})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch(err) {
    return err;
  }
}
