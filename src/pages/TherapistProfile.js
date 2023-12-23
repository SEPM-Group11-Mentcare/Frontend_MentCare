import React, { useState } from "react";
import AppointmentRow from "../components/Patient/AppointmentRow";
import ContentLayout from "../components/Layout/ContentLayout";
import Dropdown from "../components/common/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ArrowIcon from "../assets/svg/ArrowIcon";
import Text from "../components/common/Text";
import Button from "../components/common/Button";
import DoctorProfileCard from "../components/Therapists/DoctorProfileCard";
import Timeline from "../components/Therapists/Timeline";

function TherapistProfile() {
  const Introduction =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duisaute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  const educationData = [
    {
      Title: "American Dental Medical University",
      Certificate: "BDS",
      Date: "1998-2003",
    },
    {
      Title: "Another University",
      Certificate: "Certificate 2",
      Date: "2000-2005",
    },
    // {
    //   Title: "Yet Another University",
    //   Certificate: "Certificate 3",
    //   Date: "2002-2007",
    // },
    // {
    //   Title: "One More University",
    //   Certificate: "Certificate 4",
    //   Date: "2004-2009",
    // },
  ];

  const workExperienceData = [
    {
      Title: "Glowing Smiles Family Dendtal Clinic",
      Date: "2010 - Present (5 years)",
    },
    {
      Title: "Glowing Smiles Family Dendtal Clinic",
      Date: "2010 - Present (5 years)",
    },
    // {
    //   Title: "Glowing Smiles Family Dendtal Clinic",
    //   Date: "2010 - Present (5 years)",
    // },
  ];
  const awardData = [
    {
      Time: "July 2019",
      Title: "Humantiarian Award",
      Description: "blablalba",
    },
    {
      Time: "July 2019",
      Title: "Humantiarian Award",
      Description: "blablalba",
    },
    // {
    //   Time: "July 2019",
    //   Title: "Humantiarian Award",
    //   Description: "blablalba",
    // },
    // {
    //   Time: "July 2019",
    //   Title: "Humantiarian Award",
    //   Description: "blablalba",
    // },
  ];

  return (
    <ContentLayout title="Doctor Profile">
      <DoctorProfileCard
        specialistIcon={require("../assets/images/doctorSpecialist1.png")}
        name="Tuan Anh"
        certificate="BDS,MDS"
        department="Oral & Maxilofacial Surgery"
        specialist="Dentist"
        location="Newyork, USA"
        specialistTag="Dental Fillings"
        specialistTag2="Teeth Whitneing"
      />
      <div className="bg-white w-full h-full mt-20 border py-4 px-2 rounded-lg">
        <div class="grid grid-cols-4 gap-4 place-items-center">
          <div className="border-b-4  border-blue-700 pb-5">
            <Text
              children="Overview"
              weight="bold"
              className="text-blue-700 px-12" 
            />
          </div>
          <div className="00 pb-5">
            <Text children="Location" weight="bold" />
          </div>
          <div className="00 pb-5">
            <Text children="Reviews" weight="bold" />
          </div>
          <div className="00 pb-5">
            <Text children="Business Hours" weight="bold" />
          </div>
        </div>
        <div className="flex flex-col mt-5 pl-10">
          <Text children="About me" weight="bold" />
          <Text children={Introduction} className="mr-5"/>
        </div>
        <div className="flex flex-col mt-5 pl-10">
          <Text children="Education" weight="bold" />
          <ul className="list-none mt-5">
            {educationData.map((data, index) => (
              <Timeline
                key={index}
                Title={data.Title}
                Certificate={data.Certificate}
                Time={data.Date}
              />
            ))}
          </ul>
        </div>
        <div className="flex flex-col mt-5 pl-10">
          <Text children="Work & Experience" weight="bold" />
          <ul className="list-none mt-5">
            {workExperienceData.map((data, index) => (
              <Timeline key={index} Title={data.Title} Time={data.Date} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col mt-5 pl-10">
          <Text children="Awards" weight="bold" />
          <ul className="list-none mt-5">
            {awardData.map((data, index) => (
              <Timeline
                key={index}
                Title={data.Title}
                Time={data.Time}
                Description={data.Description}
                type="award"
              />
            ))}
          </ul>
        </div>
      </div>
    </ContentLayout>
  );
}

export default TherapistProfile;
