import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import VideoCall from "../components/VideoCall/VideoCall";
import VideoMeeting from "../components/VideoCallTest/VideoMeeting";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PatientVideoCall() {
  return (
    <ContentLayout title={"Video Call"}>
      <div className="bg-white w-full h-full rounded-md py-4 px-10 flex justify-center items-center">
        {/* <VideoCall /> */}
        <ToastContainer
          toastClassName={() =>
            "relative flex py-4 px-3 rounded overflow-hidden cursor-pointer bg-white shadow-lg"
          }
          bodyClassName={() => "text-black text-base font-normal"}
          position="bottom-left"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeButton={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <VideoMeeting />
      </div>
    </ContentLayout>
  );
}

export default PatientVideoCall;
