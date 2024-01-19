import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import VideoCall from "../components/VideoCall/VideoCall";

function PatientVideoCall() {
  return (
    <ContentLayout title={"Video Call"}>
      <div className="bg-white w-full h-full rounded-md py-4 px-10 flex justify-center items-center">
        <VideoCall />
      </div>
    </ContentLayout>
  );
}

export default PatientVideoCall;
