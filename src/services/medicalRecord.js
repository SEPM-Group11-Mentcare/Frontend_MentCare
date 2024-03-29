import axiosInstance from "./axiosService";


export const getMedicalRecords = async (id) => {
  try {
    const res = await axiosInstance.get(`/medicalRecord/patient/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getMedicalRecordDetail = async(id) => {
  try {
    const res = await axiosInstance.get(`/medicalRecord/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
}

export const createMedicalRecord = async(meetingSummary, diagnostic, appointment, prescription, advice) => {
  const res = await axiosInstance.post(`/medicalRecord/create`, {meetingSummary, diagnostic, appointment, prescription, advice})

  try {
    return res.data;
  } catch (err) {
    return err;
  }
}