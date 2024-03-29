import React, { useContext } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import InputForm from "../../components/common/InputForm";
import Button from "../../components/common/Button";
import Text from "../../components/common/Text";
import Checkbox from "../../components/common/Checkbox";
import { Controller, useForm } from "react-hook-form";
import CheckoutCard from "../../components/Checkout/CheckoutCard";
import { PatientContext } from "../../context/patientContext";
import * as axiosInstance from "../../services/patient";
import { createMeeting } from "../../components/VideoCall/api";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";

function CheckoutPage() {
  const { control, handleSubmit } = useForm({
    mode: "onChange",
  });
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

  const { bookingSession } = useContext(PatientContext);

  const onSubmit = async (d) => {
    console.log(d);
    const meetingID = await createMeeting({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiJlOGY0MWU4Zi1hNzBlLTRjY2EtOTI4YS1jNGRmMGJjM2NiYzMiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNTczMjU5OCwiZXhwIjoxNzIxMjg0NTk4fQ.XScCQ766Rjkydz6zwJaEUQMJ3c0erZHVWGgduWeJWUE",
    });
    console.log(meetingID);
    await axiosInstance
      .bookAppointment(
        bookingSession.therapistInfo,
        bookingSession.session.id,
        d.notes,
        d.accept,
        bookingSession.therapistInfo.price,
        meetingID
      )
      .then((res) => {
        console.log(res);
        setMessage(res.message);
        setIsMessageVisible(true);
        setNotiType("success");
        // Hide the error after 3 seconds
        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <ContentLayout title={"Checkout"}>
      {isMessageVisible && <Alert message={message} type={notiType} />}

      <div className="flex flex-row gap-8 bg-white justify-around px-8 py-8 rounded-md border-[#F0F0F0] border-[1px] border-solid">
        <div className="w-4/6">
          <Text variant="text-lg" weight="semibold" className="text-center">
            Checkout
          </Text>
          <form className="flex-col flex gap-6">
            {/* <div> */}
            <Controller
              name="notes"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputForm
                  type="textarea"
                  label="Notes"
                  name="notes"
                  value={field.value}
                  placeholder="Write some notes for your doctors..."
                  onChange={(e) => field.onChange(e.target.value)}
                  className="h-60"
                />
              )}
            />
            {/* </div> */}

            {/* <div> */}
            <Controller
              name="accept"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox
                  name="accept"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.checked)}
                >
                  I accept Therapist to access to my medical record
                </Checkbox>
              )}
            />
            {/* </div> */}
            <Button onClick={handleSubmit(onSubmit)}>
              Confirm and Checkout
            </Button>
          </form>
        </div>
        {/* <div className="w-2/6"> */}
        {bookingSession && (
          <CheckoutCard
            doctorName={bookingSession.therapistInfo.name}
            doctorExperience="20"
            date={bookingSession.session.date}
            time={bookingSession.session.time}
            consultingFee={bookingSession.therapistInfo.price}
            totalFee={bookingSession.therapistInfo.price}
          />
        )}
        {/* </div> */}
      </div>
    </ContentLayout>
  );
}

export default CheckoutPage;
