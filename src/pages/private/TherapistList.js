import React, { useEffect, useState } from "react";
import Dropdown from "../../components/common/Dropdown";
import Text from "../../components/common/Text";
import ContentLayout from "../../components/Layout/ContentLayout";
import DoctorCard from "../../components/Patient/DoctorCard";
import * as axiosInstance from "../../services/patient";

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
            Therapists
          </Text>

          <div className="flex flex-row items-center gap-4">
            <Dropdown options={sortList} selected={sort} onChange={onChange} />
          </div>
        </div>

        <div className="flex gap-5 flex-col">
          {filteredTherapists.map((therapist) => (
            <DoctorCard
              name={therapist.name}
              specialization={therapist.specialization}
              availableToday={therapist.availableToday}
              price={therapist.price}
              id={therapist._id}
            />
          ))}
        </div>
      </div>
    </ContentLayout>
  );
};

export default TherapistList;
