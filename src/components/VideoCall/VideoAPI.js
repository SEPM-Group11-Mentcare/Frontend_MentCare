//Auth token we will use to generate a meeting and connect to it
export const authToken = "ad06ee5e-ac2d-4bc3-bc24-0bdd6434d93e";

// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};
