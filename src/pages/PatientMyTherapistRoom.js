import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import CardRoom from "../components/common/CardRoom";

function PatientMyTherapistRoom() {
  const fakeDate = [
    {
      roomName: "Cozy Retreat",
      shortDescription:
        "A comfortable space with warm colors and soft furnishings for relaxation.",
    },
    {
      roomName: "Modern Oasis",
      shortDescription:
        "Sleek and contemporary design with minimalist decor for a calming atmosphere.",
    },
    {
      roomName: "Nature Haven",
      shortDescription:
        "Surrounded by natural elements, this room brings the outdoors inside for a serene experience.",
    },
    {
      roomName: "Elegant Suite",
      shortDescription:
        "Luxurious furnishings and sophisticated design to create an opulent living space.",
    },
    {
      roomName: "Urban Loft",
      shortDescription:
        "Industrial-inspired decor with exposed brick and high ceilings for an edgy yet cozy feel.",
    },
    {
      roomName: "Vintage Charm",
      shortDescription:
        "Nostalgic vibes with antique furniture and retro decor for a classic and timeless ambiance.",
    },
    {
      roomName: "Sunset View",
      shortDescription:
        "Panoramic windows and warm tones provide a breathtaking view of the sunset from this room.",
    },
    {
      roomName: "Serenity Suite",
      shortDescription:
        "A peaceful retreat designed to promote tranquility and mindfulness.",
    },
  ];

  return (
    <ContentLayout title={"My Therapist Room"}>
      <div className="bg-white w-full h-full rounded-md px-5 py-5 flex justify-center">
        <div className="grid grid-cols-4 gap-3 w-full mx-auto">
          {fakeDate.map((data, index) => {
            return (
              <CardRoom
                key={index}
                name={data.roomName}
                description={data.shortDescription}
              />
            );
          })}
        </div>
      </div>
    </ContentLayout>
  );
}

export default PatientMyTherapistRoom;
