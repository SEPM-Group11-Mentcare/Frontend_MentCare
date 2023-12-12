import React from "react";

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
        <div className="flex flex-row items-center justify-between">
          <span className="text-sm text-[#16C098]">Next Appointments</span>

          <div className="flex flex-row items-center">
            <div className="join">
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
                  <th></th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default PatientDashboard;
