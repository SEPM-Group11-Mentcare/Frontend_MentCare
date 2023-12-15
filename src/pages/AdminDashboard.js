import AppointmentRow from "../components/Patient/AppointmentRow";
import RequestRow from "../components/Admin/RequestRow";
// Import layout
import ContentLayout from "../components/Layout/ContentLayout";
import React, { useState, useEffect } from "react";
import * as axiosInstance from "../services/auth";

// Import Icons from Hero Icon
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function AdminDashboard() {
    const [therapistRequests, setTherapistRequests] = useState([]);

    // Function to fetch therapist requests
    const fetchTherapistRequests = async () => {
      try {
        // Fetch therapist requests from the backend API
        const response = await axiosInstance.getTherapistRequestList(
          "account/gettherapistrequest"
        );
    
        // If the request is successful (status code 200), update the therapistRequests state
        if (response.status === 200) {
          setTherapistRequests(response.data);
        }
      } catch (error) {
        // Log an error if fetching therapist requests fails
        console.error("Error fetching therapist requests:", error);
      }
    };
    
    // Fetch therapist requests on initial component load
    useEffect(() => {
      fetchTherapistRequests();
    }, []);
    
    // Function to handle accepting a therapist request
    const handleAccept = async (_id) => {
      try {
        // Send a request to change the therapist status to "Approve"
        const response = await axiosInstance.changeTherapistStatus(
          _id,
          "Approve"
        );
    
        // If the status change request is successful, fetch therapist requests again to update the list
        if (response.status === 200) {
          fetchTherapistRequests();
        }
      } catch (error) {
        // Log an error if accepting the request fails
        console.error("Error accepting:", error);
      }
    };
    
    // Function to handle declining a therapist request
    const handleDecline = async (_id) => {
      try {
        // Send a request to change the therapist status to "Decline"
        const response = await axiosInstance.changeTherapistStatus(
          _id,
          "Decline"
        );
    
        // If the status change request is successful, fetch therapist requests again to update the list
        if (response.status === 200) {
          fetchTherapistRequests();
        }
      } catch (error) {
        // Log an error if declining the request fails
        console.error("Error declining:", error);
      }
    };
    

  return (
    <ContentLayout title="RequestList">
      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}
        <span className="text-2xl mb-2 font-semibold">
          Therapist Request List
        </span>

        {/* Actions */}
        <div className="flex flex-row items-center justify-between mb-12">
          <span className="text-sm text-[#16C098]"></span>

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
                  <th>Fullname</th>
                  <th>National ID</th>
                  <th>Specialization</th>
                  <th>Practising Certificate Number</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Data */}
                {/* <RequestRow
                  fullname="John Doe"
                  nationalID="1234567890"
                  specialization="Psychiatry"
                  pratisingCertNum="PCN123"
                  status="Pending"
                /> */}
                {therapistRequests.map((request, index) => (
                  <RequestRow
                    key={index}
                    fullname={request.name} // Assuming 'name' holds the full name
                    nationalID={request.nationalID}
                    specialization={request.specialization}
                    pratisingCertNum={request.pratisingCertNum}
                    status={request.status}
                    _id={request._id}
                    onAccept={() => handleAccept(request._id)}
                    onDecline={() => handleDecline(request._id)}
                  />
                ))}
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

export default AdminDashboard;
