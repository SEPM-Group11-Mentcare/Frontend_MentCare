import axiosInstance from "./axiosService";

export const createJournal = async (journal) => {
  try {
    const res = await axiosInstance.post("/journals", journal);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getJournals = async () => {
  try {
    const res = await axiosInstance.get("/journals");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getJournalById = async (id) => {
  try {
    const res = await axiosInstance.get(`/journals/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const updateJournal = async (id, updatedJournal) => {
  try {
    const res = await axiosInstance.put(`/journals/${id}`, {
      journal: updatedJournal,
    });
    console.log(res);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const deleteJournal = async (id) => {
  try {
    const res = await axiosInstance.delete(`/journals/${id}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err) {
    return err;
  }
};

export const getJournalsByUserId = async (userId) => {
  try {
    const res = await axiosInstance.get(`/journals/patient/${userId}`);
    return res.data;
  } catch (err) {
    return err;
  }
};
