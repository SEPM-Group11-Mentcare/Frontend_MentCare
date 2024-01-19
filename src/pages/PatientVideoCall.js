import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import VideoCall from "../components/VideoCall/VideoCall";

function PatientVideoCall() {
  return (
    <ContentLayout title={"Video Call"}>
      <VideoCall />
    </ContentLayout>
  );
}

export default PatientVideoCall;
