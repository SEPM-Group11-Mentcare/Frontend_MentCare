import { useEffect, useState } from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import PatientProfileForm from "../components/Patient/PatientProfileForm";
import * as axiosInstance from '../services/patient'


function PatientProfile() {

    const [profile, setProfile] = useState(null);
    // Handle fetch patient profile
    const fetchPatientProfile = async () => {
        try {
            const res = await axiosInstance.getPatientProfile();
            console.log(res);
            setProfile(res);
        }
        catch (err) {
            console.log(err.response?.data?.error?.message || 'Error fetching patient profile');
        }

    };

    // Fetch patient profile 
    useEffect(() => {
        fetchPatientProfile();
    }, []);


    return (
        <ContentLayout title='My Profile'>
            <PatientProfileForm profile={profile}  />
        </ContentLayout>
    )
}

export default PatientProfile;