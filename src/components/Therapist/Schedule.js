import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import Button from "../common/Button";
import InputForm from "../common/InputForm";
import Text from "../common/Text";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Controller, useForm } from "react-hook-form";
import * as axiosInstance from "../../services/therapist";
import { NotificationContext } from "../../context/notificationContext";

const Schedule = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const timeList = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

  const [availableTime, setAvailableTime] = useState([]);
  const [selectedDate, setSelectedDate] = useState([])

  const [currentDate, setCurrentDate] = useState(new Date());
  const nextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  const preDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const formatDateAndTime = (date, time) => {
    const parsedDate = new Date(date);

    const [hours, minutes] = time.split(":");

    parsedDate.setHours(hours);
    parsedDate.setMinutes(minutes);
    parsedDate.setSeconds(0);
    parsedDate.setMilliseconds(0);

    return parsedDate;
  };

  const onClick = (e) => {
    console.log(e.target.value);
    const valueTime = new Date(e.target.value).getTime();
    const isValueInArray = availableTime.some(
      (time) => time.getTime() === valueTime
    );

    if (isValueInArray) {
      setAvailableTime((prevAvailableTime) =>
        prevAvailableTime.filter((time) => time.getTime() !== valueTime)
      );
    } else {
      setAvailableTime((prevAvailableTime) => [
        ...prevAvailableTime,
        new Date(e.target.value),
      ]);
    }
  };

  const handleUpdate = async(e) => {
    await axiosInstance.deleteSchedule(e.target.value)
    .then((res) => {
      // console.log(res);
      fetchData()
      setMessage(res);
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
    })
  }

  const isValueInArray = (value) => {
    const valueTime = new Date(value).getTime();
    const isValueInArray = availableTime.some(
      (time) => time.getTime() === valueTime
    );
    return isValueInArray;
  };

  const isDateinBookedRange = (value) => {
    const valueTime = new Date(value).getTime();
    const isInArray = selectedDate.some((date) => new Date(date.dateTime).getTime() === valueTime)
    return isInArray;
  }

  const checkStatus = (value, status) => {
    return selectedDate.some(
      (date) => new Date(date.dateTime).getTime() === new Date(value).getTime() && date.status === status
    );
  };

  const reset = () => {
    setAvailableTime([]);
  };

  const onSubmit = async() => {
    await axiosInstance.setSchedule(availableTime)
    .then((res) => {
      fetchData();
      console.log(res);
      setMessage(res);
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
    })
  }

  const findIdByValue = (targetValue) => {
    const foundItem = selectedDate.find(item =>  new Date(item.dateTime).getTime() === new Date(targetValue).getTime());
    return(foundItem ? foundItem._id : new Date(targetValue));
  };

  async function fetchData() {
    await axiosInstance.getSchedule()
    .then((res) => {
      setSelectedDate(res);
      reset();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

// console.log(selectedDate);
  return (
    <div className="flex flex-col gap-6 py-3">
      <div className="flex items-center">
        <Controller
          name="date"
          control={control}
          defaultValue={new Date().toISOString().substr(0, 10)}
          rules={{
            required: "Date is required!",
          }}
          render={({ field }) => (
            <div>
              <InputForm
                type="date"
                label="Date"
                name="date"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value);
                  setCurrentDate(new Date(e.target.value));
                }}
                labelType="up"
              />
              {errors.date && (
                <Text variant="text-xs" className="text-red-500 mt-3">
                  {errors.date.message}
                </Text>
              )}
            </div>
          )}
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-10">
        <Text weight="bold" variant="text-xl">
          Please choose your availability time
        </Text>
        <div className="flex justify-between w-full items-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={preDay}
            className="cursor-pointer hover:text-primaryBlue"
          />
          <Text variant="text-md" weight="semibold">
            {format(currentDate, "dd MMMM yyyy")}
          </Text>
          <FontAwesomeIcon
            icon={faChevronRight}
            onClick={nextDay}
            className="cursor-pointer hover:text-primaryBlue"
          />
        </div>
        <div className="grid gap-6 grid-cols-5">
          {timeList.map((time) => (
            <Button
              variant={
                isDateinBookedRange(formatDateAndTime(currentDate, time)) ? "red" : 
                isValueInArray(formatDateAndTime(currentDate, time))
                  ? ""
                  : "gray"
              }
              size="lg"
              value={findIdByValue(formatDateAndTime(currentDate, time))}
              onClick={checkStatus(formatDateAndTime(currentDate, time), "Free") ? handleUpdate : onClick}
              disabled={
                new Date(currentDate).getTime() < new Date().setHours(0, 0, 0, 0) 
                || 
                checkStatus(formatDateAndTime(currentDate, time), "Booked")
              }
              
            >
              {time}
            </Button>
          ))}
        </div>

        <div className="flex justify-between gap-6">
          <Button size="xl" onClick={onSubmit}>Save</Button>
          <Button size="xl" variant="blueOutline" onClick={reset}>
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
