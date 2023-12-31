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
