import axiosInstance from "./axiosService";

export const getPatientProfile = async () => {
    try {
        const res = await axiosInstance.get('patient/profile');
        if (res.status === 200) {
            return res.data;
        }
    }
    catch (err) {
        console.error('Error fetching patient profile: ', err);
        throw err;
    }
}

export const updatePatientProfile = async (data) => {
    try {
        const res = await axiosInstance.put('patient/profile', data);
        if (res.status === 200) {
            return res.data;
        }
    }
    catch (err) {
        console.error('Error fetching patient profile: ', err);
        throw err;
    }
}