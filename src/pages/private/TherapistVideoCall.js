import React from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import { useParams } from "react-router-dom";
import VideoMeeting from "../../components/VideoCall/VideoMeeting";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TherapistVideoCall() {
  const params = useParams();

  return (
    <ContentLayout title={"Video Call"}>
      <div className="bg-white w-full h-full rounded-md py-4 px-10 flex justify-center items-center">
        {/* <VideoCall /> */}
        <VideoMeeting roomID={params.id} returnPath="/therapist/appointments" />
      </div>
    </ContentLayout>
  );
}

export default TherapistVideoCall;
