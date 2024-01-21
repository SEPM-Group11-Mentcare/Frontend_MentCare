import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/common/Button";
import Calendar from "../../components/common/Calendar";
import ContentLayout from "../../components/Layout/ContentLayout";
import DoctorCard from "../../components/Patient/DoctorCard";
import { PatientContext } from "../../context/patientContext";
import * as axiosInstance from "../../services/patient";
import * as axiosInstanceSchedule from "../../services/schedule";

const BookingPage = () => {
  const [schedules, setSchedule] = useState([]);
  const [therapist, setTherapist] = useState();
  const [selectedOption, setSelectedOption] = useState();
  const { id } = useParams();
  const { setBookingSession } = useContext(PatientContext);
  const navigate = useNavigate();
  const handleProceed = async() => {
    await axiosInstanceSchedule.getScheduleTime(selectedOption)
    .then((res) => {
      setBookingSession({
        therapistInfo: therapist,
        session: {
          id: res._id,
          date: format(new Date(res.dateTime), "dd MMM yyyy"),
          time: new Date(res.dateTime).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          })
        }
      })
      navigate('/patient/checkout')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .getTherapistSchedule(id)
        .then((res) => {
          setSchedule(res);
        })
        .catch((err) => {
          console.log(err);
        });

      await axiosInstance
        .getTherapist(id)
        .then((res) => {
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
      <div className="flex flex-col gap-6 bg-transparent">
        {therapist && (
          <DoctorCard
            img="https://picsum.photos/200"
            name={therapist.name}
            specialization={therapist.specialization}
            detail={true}
          />
        )}

        <Calendar schedules={schedules} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

        <div className="flex justify-end">
          <Button onClick={handleProceed}>Proceed to Pay</Button>
        </div>
      </div>
    </ContentLayout>
  );
};

export default BookingPage;
