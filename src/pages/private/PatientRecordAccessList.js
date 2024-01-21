import React, { useContext, useEffect, useState } from "react";
import ContentLayout from "../../components/Layout/ContentLayout";
import AccessRecordRow from "../../components/Patient/AccessRecordRow";
import { NotificationContext } from "../../context/notificationContext";
import * as axiosInstance from "../../services/patient";
import Alert from "../../components/common/Alert";

function PatientRecordAccessList() {
  const [therapists, setTherapists] = useState();
  const {
    setIsMessageVisible,
    isMessageVisible,
    message,
    setMessage,
    setNotiType,
    notiType,
  } = useContext(NotificationContext);

  async function fetchData() {
    await axiosInstance
      .getAccessList()
      .then((res) => {
        setTherapists(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = async (id) => {
    await axiosInstance
      .removeAccess(id)
      .then((res) => {
        console.log(res);
        setMessage(res);
        setIsMessageVisible(true);
        setNotiType("success");
        // Hide the error after 3 seconds
        setTimeout(() => {
          setMessage(null);
          setIsMessageVisible(false);
        }, 3000);
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContentLayout title={"Access Record Management"}>
      {isMessageVisible && <Alert message={message} type={notiType} />}

      <div className="overflow-x-auto bg-white w-full h-full rounded-md py-4 px-10">
        <table className="table text-center">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Therapist Name</th>
              <th>Specialization</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* All Therapist have access to medical record */}
            {therapists &&
              therapists.map((data, index) => {
                const className = (index + 1) % 2 === 0 ? "bg-base-200" : "";
                return (
                  <AccessRecordRow
                    number={index + 1}
                    name={data.name}
                    spec={data.specialization}
                    className={className}
                    handleRemove={() => handleRemove(data._id)}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </ContentLayout>
  );
}

export default PatientRecordAccessList;
