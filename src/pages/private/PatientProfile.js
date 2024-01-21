import { useContext } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import PatientProfileForm from "../../components/Patient/PatientProfileForm";
import { AuthContext } from "../../context/authContext";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";

function PatientProfile() {
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
    <ContentLayout title="My Profile">
            {isMessageVisible && <Alert message={message} type={notiType} />}
      <PatientProfileForm profile={userInfo} />
    </ContentLayout>
  );
}

export default PatientProfile;
