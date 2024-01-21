import React, { useContext, useState } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import Text from "../../components/common/Text";
import DoctorProfileCard from "../../components/Therapist/DoctorProfileCard";
import Timeline from "../../components/Therapists/Timeline";
import { AuthContext } from "../../context/authContext";
import TherapistProfileForm from "../../components/Therapist/TherapistProfileForm";

function TherapistProfile() {
  const [showOverview, setShowOverview] = useState(true);
  const { userInfo } = useContext(AuthContext);
  return (
    <ContentLayout title="Doctor Profile" className="fixed">
      <TherapistProfileForm profile={userInfo}/>
    </ContentLayout>
  );
}

export default TherapistProfile;
