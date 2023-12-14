import React from "react";
import AppointmentRow from "../components/Patient/AppointmentRow";

// Import layout
import ContentLayout from "../components/Layout/ContentLayout";

// Import Icons from Hero Icon
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function PatientDashboard() {
  return (
    <ContentLayout title="Appointments">
      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}
        <span className="text-2xl mb-2 font-semibold">All appointments</span>

        {/* Actions */}
        <div className="flex flex-row items-center justify-between mb-12">
          <span className="text-sm text-[#16C098]">Next Appointments</span>

          <div className="flex flex-row items-center">
            <div className="join mr-2">
              <button className="btn btn-square join-item rounded-md bg-[#F9FBFF] border-none">
                <MagnifyingGlassIcon className="mx-2 my-2" />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full max-w-xs join-item bg-[#F9FBFF] rounded-md border-none focus:outline-none text-sm"
              />
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} role="button" className="btn bg-[#F9FBFF]">
                Sort
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Newest</a>
                </li>
                <li>
                  <a>Oldest</a>
                </li>
              </ul>
            </div>
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
