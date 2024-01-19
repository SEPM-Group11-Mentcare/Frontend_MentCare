import axiosInstance from "./axiosService";

export const setSchedule = async (schedule) => {
  const res = await axiosInstance.post("therapist/schedule", { schedule });

  try {
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getSchedule = async () => {
  const res = await axiosInstance.get("therapist/schedules");

  try {
    return res.data;
  } catch (err) {
    return err;
  }
};

export const deleteSchedule = async (id) => {
  const res = await axiosInstance.delete(`/therapist/delete/${id}`);

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const getTherapists = async () => {
  const res = await axiosInstance.get("/patient/view");

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const getRequestList = async () => {
  const res = await axiosInstance.get('/therapist/requests')

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const getPatientList = async() => {
  const res = await axiosInstance.get("/therapist/patients")

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}

export const updateProfile = async(id, username, name, dob, nationalID, pratisingCertNum, specialization, price, aboutme, experience) => {
  const res = await axiosInstance.put("/therapist/profile", {id, username, name, dob, nationalID, pratisingCertNum, specialization, price, aboutme, experience})

  try {
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
}