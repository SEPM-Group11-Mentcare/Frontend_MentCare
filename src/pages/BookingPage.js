import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/common/Button";
import Calendar from "../components/common/Calendar";
import ContentLayout from "../components/Layout/ContentLayout";
import DoctorCard from "../components/Therapists/DoctorCard";
import * as axiosInstance from "../services/patient";

const BookingPage = () => {
  const [schedules, setSchedule] = useState([]);
  const [therapist, setTherapist] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .getTherapistSchedule(id)
        .then((res) => {
          // console.log(res);
          setSchedule(res);
        })
        .catch((err) => {
          console.log(err);
        });

      await axiosInstance
        .getTherapist(id)
        .then((res) => {
          console.log(res);
          setTherapist(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [id]);

  return (
    <ContentLayout title="Booking">
      <div className="flex flex-col gap-6">
        {therapist && (
          <DoctorCard
            img="https://picsum.photos"
            name={therapist.name}
            specialization={therapist.specialization}
            detail={true}
          />
        )}

        <Calendar schedules={schedules} />

        <div className="flex justify-end">
          <Button>Proceed to Pay</Button>
        </div>
      </div>
    </ContentLayout>
  );
};

export default BookingPage;
