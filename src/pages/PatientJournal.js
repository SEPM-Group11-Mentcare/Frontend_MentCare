import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import TextEditor from "../components/Journal/TextEditor";

function PatientJournal() {
  return (
    <ContentLayout title={"Journal Writing"}>
      {/* Writing Box */}
      <div className="bg-white px-8 py-8 rounded-lg h-full">
        <TextEditor initialContent={"Default bla bla bla"} />
      </div>
    </ContentLayout>
  );
}

export default PatientJournal;
