import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MeetingProvider,
  useMeeting,
  useParticipant,
} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import Button from "../common/Button";

// PaticipantView
function ParticipantView(props) {
  const micRef = useRef(null);
  const { webcamStream, micStream, webcamOn, micOn, isLocal, displayName } =
    useParticipant(props.participantId);

  const videoStream = useMemo(() => {
    if (webcamOn && webcamStream) {
      const mediaStream = new MediaStream();
      mediaStream.addTrack(webcamStream.track);
      return mediaStream;
    }
  }, [webcamStream, webcamOn]);

  useEffect(() => {
    if (micRef.current) {
      if (micOn && micStream) {
        const mediaStream = new MediaStream();
        mediaStream.addTrack(micStream.track);

        micRef.current.srcObject = mediaStream;
        micRef.current
          .play()
          .catch((error) =>
            console.error("videoElem.current.play() failed", error)
          );
      } else {
        micRef.current.srcObject = null;
      }
    }
  }, [micStream, micOn]);

  return (
    <div className="w-full h-full">
      <audio ref={micRef} autoPlay playsInline muted={isLocal} />
      {webcamOn && (
        <ReactPlayer
          playsinline // very very imp prop
          pip={false}
          light={false}
          controls={false}
          muted={true}
          playing={true}
          url={videoStream}
          // className="w-1/2 h-1/2"
          width="100%"
          height="100%"
          onError={(err) => {
            console.log(err, "participant video error");
          }}
        />
      )}
    </div>
  );
}

// Meeting View
function MeetingView() {
  const [joined, setJoined] = useState(null);
  //Get the method which will be used to join the meeting.
  //We will also get the participants list to display all participants
  const { join, participants, leave } = useMeeting({
    //callback for when meeting is joined successfully
    onMeetingJoined: () => {
      setJoined("JOINED");
    },
  });
  const joinMeeting = () => {
    setJoined("JOINING");
    join();
  };
  const leaveMeeting = () => {
    leave();
    setJoined(null);
  };

  return (
    <div className="container w-full h-full">
      {joined && joined == "JOINED" ? (
        <div>
          <div className="grid grid-cols-2 gap-5">
            {[...participants.keys()].map((participantId) => (
              <ParticipantView
                participantId={participantId}
                key={participantId}
              />
            ))}
          </div>
          <button
            onClick={leaveMeeting}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Leave Meeting
          </button>
        </div>
      ) : joined && joined == "JOINING" ? (
        <p>Joining the meeting...</p>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          {/* <button onClick={joinMeeting}>Join the meeting</button> */}
          <Button onClick={joinMeeting}>Join the meeting</Button>
        </div>
      )}
    </div>
  );
}
const VideoCall = () => {
  return (
    <MeetingProvider
      config={{
        meetingId: "k9yt-e160-arz1",
        micEnabled: true,
        webcamEnabled: true,
        name: "Thong's Org",
      }}
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlOGY0MWU4Zi1hNzBlLTRjY2EtOTI4YS1jNGRmMGJjM2NiYzMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNTY0NTY1OSwiZXhwIjoxNzA1NzMyMDU5fQ.Gp-A_G7-oKvIa7_539mqUxMvwi5S92cTN0UGXBf1tOA"
    >
      <div className="w-full h-full flex items-center justify-center">
        <MeetingView />
      </div>
    </MeetingProvider>
  );
};
export default VideoCall;
