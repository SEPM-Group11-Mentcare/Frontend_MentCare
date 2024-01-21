import RequestRow from "../../components/Admin/RequestRow";
// Import layout
import ContentLayout from "../../components/Layout/ContentLayout";
import React, { useState, useEffect, useContext } from "react";
import * as axiosInstance from "../../services/admin";
import Text from "../../components/common/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../components/common/Dropdown";
import { NotificationContext } from "../../context/notificationContext";
import Alert from "../../components/common/Alert";

function AdminTherapistList() {
  const [therapistRequests, setTherapistRequests] = useState([]);
  const sortList = ["All", "Pending", "Approve", "Decline"];
  const [sort, setSort] = useState(sortList[0]);
  const onChange = (e) => {
    setSort(e.target.value);
  };
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

  // Function to fetch therapist requests
  const fetchTherapistRequests = async () => {
    await axiosInstance
      .getTherapistRequestList(sort)
      .then((res) => {
        console.log(res);
        setTherapistRequests(res);
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
      });
  };

  // Fetch therapist requests on initial component load
  useEffect(() => {
    fetchTherapistRequests();
  }, [sort]);

  const handleUpdate = async (_id, status) => {
    await axiosInstance
      .changeTherapistStatus(_id, status)
      .then((res) => {
        fetchTherapistRequests();
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
      });
  };

  return (
    <ContentLayout title="Request List">
      {isMessageVisible && <Alert message={message} type={notiType} />}

      <div className="bg-white w-full h-full rounded-md py-4 px-10 flex flex-col gap-6">
        <div className="flex flex-row items-center justify-between">
          <Text variant="text-xl" weight="bold">
            Doctors
          </Text>
          <div className="flex flex-row items-center gap-4">
            <Dropdown options={sortList} onChange={onChange} selected={sort} />
          </div>
        </div>

        {/* Table */}
        <div>
          <div className="overflow-x-auto">
            <table className="table text-center">
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
                {therapistRequests.map((request) => (
                  <RequestRow
                    fullname={request.name}
                    nationalID={request.nationalID}
                    specialization={request.specialization}
                    pratisingCertNum={request.pratisingCertNum}
                    status={request.status}
                    onAccept={() => handleUpdate(request._id, "Approve")}
                    onDecline={() => handleUpdate(request._id, "Decline")}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}

export default AdminTherapistList;
