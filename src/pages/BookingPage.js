import React, { useEffect, useState } from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import DoctorCard from "../components/Therapists/DoctorCard";

const BookingPage = () => {
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();

    // Calculate the start date of the week (Sunday)
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());

    // Calculate the end date of the week (Saturday)
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

    // Create an array to store the days of the week
    const daysOfWeek = [];

    // Iterate through the days of the week
    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      daysOfWeek.push(new Date(date)); // Create a new Date object to avoid reference issues
    }

    // Set the array of days in the state
    setWeekDays(daysOfWeek);
  }, []);
  return (
    <ContentLayout title="Booking">
      <DoctorCard
        img="https://picsum.photos/200"
        name="John Doe"
        experience="20"
        availableToday={true}
        price="500000"
        detail={true}
      />

      <div>
        <h3>Days of the Week</h3>
        <ul>
          {weekDays.map((day, index) => (
            <li key={index}>{day.toDateString()}</li>
          ))}
        </ul>
      </div>
    </ContentLayout>
  );
};

export default BookingPage;
