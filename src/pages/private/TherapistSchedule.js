import React from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import Schedule from "../../components/TherapistSchedule/Schedule";

const TherapistSchedule = () => {
return (
  <ContentLayout title="Appointments">
      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}
        <Schedule/>
      </div>
    </ContentLayout>
)
}

export default TherapistSchedule;