import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Dropdown from "../components/common/Dropdown";
import Text from "../components/common/Text";
import ContentLayout from "../components/Layout/ContentLayout";
import DoctorCard from "../components/Therapists/DoctorCard";

const TherapistPage = () => {
  const sortList = ["Newest", "Oldest"]
  const [sort, setSort] = useState(sortList[0]);
  const onChange = (e) => {
    setSort(e.target.value);
  };
  return (
    <ContentLayout title="Therapists">
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
            <Dropdown options={sortList} selected={sort} onChange={onChange}/>
          </div>
        </div>

        <div className="flex gap-5 flex-col">
          <DoctorCard
            img="https://picsum.photos/200"
            name="John Doe"
            experience="20"
            availableToday={true}
            price="500000"
          />
          <DoctorCard
            img="https://picsum.photos/200"
            name="John Doe"
            experience="20"
            availableToday={false}
            price="500000"
          />
          <DoctorCard
            img="https://picsum.photos/200"
            name="John Doe"
            experience="20"
            availableToday={true}
            price="500000"
          />
          <DoctorCard
            img="https://picsum.photos/200"
            name="John Doe"
            experience="20"
            availableToday={false}
            price="500000"
          />
          <DoctorCard
            img="https://picsum.photos/200"
            name="John Doe"
            experience="20"
            availableToday={true}
            price="500000"
          />
        </div>
      </div>
    </ContentLayout>
  );
};

export default TherapistPage;
