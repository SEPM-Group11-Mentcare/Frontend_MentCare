import React, { useContext } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import TextEditor from "../../components/Journal/TextEditor";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";

function PatientJournal() {
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

  return (
    <ContentLayout title={"Journal Writing"}>
      {isMessageVisible && <Alert message={message} type={notiType} />}
      {/* Writing Box */}
      <div className="bg-white px-8 py-8 rounded-lg h-full">
        <TextEditor />
      </div>
    </ContentLayout>
  );
}

export default PatientJournal;
