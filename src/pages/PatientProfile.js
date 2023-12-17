import ContentLayout from "../components/Layout/ContentLayout";
import PatientProfileForm from "../components/Patient/PatientProfileForm";


function PatientProfile() {
    
    return (
        <ContentLayout title='My Profile'>
           <PatientProfileForm />
        </ContentLayout>
    )
}

export default PatientProfile;