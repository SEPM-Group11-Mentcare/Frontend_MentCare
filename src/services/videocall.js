//Auth token we will use to generate a meeting and connect to it
export const authToken =
  "56e6e8ce5b9ef33017849c35840939ddbd4292e778072da3eebf823696d01d04";
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
