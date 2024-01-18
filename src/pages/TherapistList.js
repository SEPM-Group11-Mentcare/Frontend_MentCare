import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Dropdown from "../components/common/Dropdown";
import Text from "../components/common/Text";
import ContentLayout from "../components/Layout/ContentLayout";
import DoctorCard from "../components/Patient/DoctorCard";
import * as axiosInstance from "../services/patient";

const TherapistList = () => {
  const sortList = ["All", "Available", "Unavailable"];
  const [therapists, setTherapists] = useState([]);
  const [sort, setSort] = useState(sortList[0]);
  const onChange = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .getTherapists()
        .then((res) => {
          // console.log(res);
          setTherapists(res.therapists);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);

  const filteredTherapists = therapists.filter((therapist) => {
    if (sort === "All") {
      return true;
    } else if (sort === "Available") {
      return therapist.availableToday;
    } else {
      return !therapist.availableToday;
    }
  });

  return (
    <ContentLayout title="Booking">
      <div className="bg-white w-full h-full rounded-md py-4 px-10 flex flex-col gap-6">
        {/* Title */}

        {/* Actions */}
        <div className="flex flex-row items-center justify-between">
          <Text variant="text-xl" weight="bold">
            Doctors
          </Text>

          <div className="flex flex-row items-center gap-4">
            <div className="flex justify-center items-center input input-bordered max-w-xs bg-[#F9FBFF] rounded-md border-none focus:outline-none focus:ring-primaryBlue text-sm">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search"
                className="border-0 bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
            <Dropdown options={sortList} selected={sort} onChange={onChange} />
          </div>
        </div>

        <div className="flex gap-5 flex-col">
          {
            filteredTherapists.map((therapist) => (
              <DoctorCard
              img="https://picsum.photos/200/500"
              name={therapist.name}
              specialization={therapist.specialization}
              availableToday={therapist.availableToday}
              price="500000"
              id={therapist._id}
              />
            ))
          }
        </div>
      </div>
    </ContentLayout>
  );
};

export default TherapistList;
