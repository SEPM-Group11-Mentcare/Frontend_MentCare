import { useContext, useEffect, useState } from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import PatientProfileForm from "../components/Patient/PatientProfileForm";
import { AuthContext } from "../context/authContext";
import * as axiosInstance from '../services/patient'


function PatientProfile() {

   const { userInfo } = useContext(AuthContext);


    return (
        <ContentLayout title='My Profile'>
            <PatientProfileForm profile={userInfo}  />
        </ContentLayout>
    )
}

export default PatientProfile;