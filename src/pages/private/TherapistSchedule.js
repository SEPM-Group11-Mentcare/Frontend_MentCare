import React, { useContext } from "react";
import Alert from "../../components/common/Alert";
import ContentLayout from "../../components/Layout/ContentLayout";
import Schedule from "../../components/Therapist/Schedule";
import { NotificationContext } from "../../context/notificationContext";

const TherapistSchedule = () => {
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

return (
  <ContentLayout title="Appointments">
      {isMessageVisible && <Alert message={message} type={notiType} />}

      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}
        <Schedule/>
      </div>
    </ContentLayout>
)
}

export default TherapistSchedule;