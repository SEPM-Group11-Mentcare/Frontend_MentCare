import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Text from "./Text";
import Button from "./Button";

const Calendar = ({ schedules }) => {
  const [weekDays, setWeekDays] = useState([
    {
      date: null,
      dayOfWeek: null,
    },
  ]);
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - currentDate.getDay());

    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() + (6 - currentDate.getDay()));

    const daysOfWeek = [];

    for (
      let date = startDate;
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      daysOfWeek.push(new Date(date));
    }
    const weekDayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const week = daysOfWeek.map((day) => {
      const date = format(day, "dd MMM yyyy");
      const indexDayOfWeek = day.getDay();
      const dayOfWeek = weekDayList[indexDayOfWeek];
      return {
        date: date,
        daysOfWeek: dayOfWeek,
      };
    });
    setWeekDays(week);
  }, [currentDate]);

  const [selectedOption, setSelectedOption] = useState();

  const onClick = (e) => {
    setSelectedOption(e.target.value);
  };

  const preWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Text variant="text-lg" weight="bold">
          {format(currentDate, "dd MMMM yyyy")}
        </Text>
        {weekDays[6] && (
          <input
            className="input input-bordered border-2 border-gray-400 hover:border-[#7879F1] focus:border-[#7879F1] focus:outline-none disabled:bg-white"
            value={`${format(
              new Date(weekDays[0].date),
              "dd/MM/yyyy"
            )}-${format(new Date(weekDays[6].date), "dd/MM/yyyy")}`}
            disabled
          />
        )}
      </div>

      <div className="bg-white px-3 py-6">
        <div className="grid gap-4 grid-cols-7 text-center">
          {weekDays.map((date) => (
            <div className=" flex flex-col justify-start gap-3">
              <div className="flex items-center gap-2">
                {date.daysOfWeek === "Sun" ? (
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    onClick={preWeek}
                    className="cursor-pointer hover:text-primaryBlue"
                  />
                ) : null}

                <div className="flex flex-col justify-center flex-1 gap-2">
                  <Text weight="bold">{date.daysOfWeek}</Text>
                  <Text variant="text-sm" className="text-gray-400">
                    {date.date}
                  </Text>
                </div>
                {date.daysOfWeek === "Sat" ? (
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    onClick={nextWeek}
                    className="cursor-pointer hover:text-primaryBlue"
                  />
                ) : null}
              </div>

              {schedules.map((schedule) => {
                const scheduleDate = new Date(schedule.dateTime).setHours(
                  0,
                  0,
                  0,
                  0
                );
                const currDate = new Date(date.date).setHours(0, 0, 0, 0);

                return scheduleDate === currDate ? (
                  <Button
                    variant={selectedOption === schedule._id ? "" : "gray"}
                    onClick={onClick}
                    value={schedule._id}
                    disabled={
                      schedule.status === "Booked" ||
                      new Date(scheduleDate).getTime() <
                        new Date().setHours(0, 0, 0, 0)
                    }
                  >
                    {new Date(schedule.dateTime)
                      .toISOString()
                      .substring(11, 16)}
                  </Button>
                ) : null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
