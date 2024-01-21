import { useContext } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import PatientProfileForm from "../../components/Patient/PatientProfileForm";
import { AuthContext } from "../../context/authContext";


function PatientProfile() {

    const { userInfo } = useContext(AuthContext);
    return (
        <ContentLayout title='My Profile'>
            <PatientProfileForm profile={userInfo} />
        </ContentLayout>
    )
}

export default PatientProfile;