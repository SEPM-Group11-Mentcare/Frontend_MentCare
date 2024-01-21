import React, { useContext, useState } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import { AuthContext } from "../../context/authContext";
import TherapistProfileForm from "../../components/Therapist/TherapistProfileForm";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";

function TherapistProfile() {
  const { userInfo } = useContext(AuthContext);
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);
  return (
    <ContentLayout title="Doctor Profile" className="fixed">
      {isMessageVisible && <Alert message={message} type={notiType} />}
      <TherapistProfileForm profile={userInfo} />
    </ContentLayout>
  );
}

export default TherapistProfile;
