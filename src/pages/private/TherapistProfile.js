import React, { useContext, useState } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import { AuthContext } from "../../context/authContext";
import TherapistProfileForm from "../../components/Therapist/TherapistProfileForm";

function TherapistProfile() {
  const { userInfo } = useContext(AuthContext);
  return (
    <ContentLayout title="Doctor Profile" className="fixed">
      <TherapistProfileForm profile={userInfo} />
    </ContentLayout>
  );
}

export default TherapistProfile;
