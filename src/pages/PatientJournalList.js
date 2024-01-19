import React, { useState, useEffect } from "react";
import JournalRow from "../components/Journal/JournalRow";
import ContentLayout from "../components/Layout/ContentLayout";
import Dropdown from "../components/common/Dropdown";
import Button from "../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as axiosInstance from "../services/journal";

function PatientJournalList() {
  // const sortList = ["Newest", "Oldest"];
  // const [sort, setSort] = useState(sortList[0]);
  const [journals, setJournals] = useState();

  // console.log(journals);

  useEffect(() => {
    async function fetchData() {
      await axiosInstance
        .getJournalsByUserId()
        .then((res) => {
          console.log(res);
          setJournals(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, []);

  const handleDeleteJournal = async (journalID) => {
    try {
      // Call the API to delete the journal by its ID
      await axiosInstance.deleteJournal(journalID);

      // Remove the deleted journal from the local state
      setJournals((prevState) =>
        prevState.filter((journal) => journal._id !== journalID)
      );

      console.log(`Journal with ID ${journalID} deleted successfully.`);
    } catch (error) {
      console.error(
        `Error deleting journal with ID ${journalID}:`,
        error.message
      );
    }
  };

  return (
    <ContentLayout title="Journal List">
      <div className="bg-white w-full h-full rounded-md py-4 px-10">
        {/* Title */}
        {/* <span className="text-2xl mb-2 font-semibold">All Journals</span> */}

        {/* Actions */}
        <div className="flex flex-row items-center justify-between mb-10 mt-3">
        <span className="text-2xl mb-2 font-semibold">All Journals</span>

          <Button href={"/patient/journals/new"}>Create A Journal</Button>

          {/* <div className="flex flex-row items-center gap-4">
            <div className="flex justify-center items-center input input-bordered max-w-xs bg-[#F9FBFF] rounded-md border-none focus:outline-none focus:ring-primaryBlue text-sm">
              <FontAwesomeIcon icon={faSearch} />
              <input
                type="text"
                placeholder="Search"
                className="border-0 bg-transparent focus:outline-none focus:ring-0"
              />
            </div>
          </div> */}
        </div>

        {/* Table */}
        <div className="w-full">
          <div className="overflow-x-auto w-full">
            <table className="table text-center">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Journal</th>
                  <th>Created Date</th>
                  <th>Mood</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {journals &&
                  journals.map((journal, index) => (
                    <JournalRow
                      number={index + 1}
                      key={journal._id}
                      journalID={journal._id}
                      journalTitle={journal.journalTitle}
                      journalText={journal.journalText}
                      mood={journal.mood}
                      createdDate={journal.createdDate}
                      handleDelete={() => handleDeleteJournal(journal._id)}
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

export default PatientJournalList;
