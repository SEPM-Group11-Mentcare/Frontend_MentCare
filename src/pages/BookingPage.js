import React, { useEffect, useState } from "react";
import Button from "../components/common/Button";
import Calendar from "../components/common/Calendar";
import ContentLayout from "../components/Layout/ContentLayout";
import DoctorCard from "../components/Therapists/DoctorCard";

const BookingPage = () => {
  return (
    <ContentLayout title="Booking">
      <div className="flex flex-col gap-6">
        <DoctorCard
          img="https://picsum.photos/200"
          name="John Doe"
          experience="20"
          availableToday={true}
          price="500000"
          detail={true}
        />

        <Calendar />

        <div className="flex justify-end">
          <Button>Proceed to Pay</Button>
        </div>
      </div>
    </ContentLayout>
  );
};

export default BookingPage;
