import React, { useState } from "react";
import AppointmentRow from "../components/Patient/AppointmentRow";
import ContentLayout from "../components/Layout/ContentLayout";
import Dropdown from "../components/common/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function PatientDashboard() {
  const sortList = ["Newest", "Oldest"];
  const [sort, setSort] = useState(sortList[0]);
  const onChange = (e) => {
    setSort(e.target.value);
  };
  return (
    
    <ContentLayout title="Appointments">
      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}
        <span className="text-2xl mb-2 font-semibold">All appointments</span>

        {/* Actions */}
        <div className="flex flex-row items-center justify-between mb-12">
          <span className="text-sm text-[#16C098]">Next Appointments</span>

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

        {/* Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Booking Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <AppointmentRow
                  doctor="Vo Thanh Thong"
                  bookingdate="01/01/2024"
                  amount="500"
                  status="confirm"
                />
                {/* row 1 */}
                <AppointmentRow
                  doctor="Vo Thanh Thong"
                  bookingdate="01/01/2024"
                  amount="200"
                  status="confirm"
                />
                {/* row 2 */}
                <AppointmentRow
                  doctor="Vo Thanh Thong"
                  bookingdate="01/01/2024"
                  amount="999"
                  status="deny"
                />
                {/* row 3 */}
                <AppointmentRow
                  doctor="Vo Thanh Thong"
                  bookingdate="01/01/2024"
                  amount="100"
                  status="confirm"
                />
              </tbody>
            </table>
            {/* <div className="join">
              <button className="join-item btn btn-sm">1</button>
              <button className="join-item btn btn-sm btn-active">2</button>
              <button className="join-item btn btn-sm">3</button>
              <button className="join-item btn btn-sm">4</button>
            </div> */}
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default PatientDashboard;
