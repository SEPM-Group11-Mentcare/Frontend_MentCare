import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Picker from "emoji-picker-react";
import { useForm, Controller } from "react-hook-form";
import Button from "../common/Button";
import * as axiosInstance from "../../services/journal";

function TextEditor({ initialContent }) {
  const { journalID } = useParams();
  const [journalData, setJournalData] = useState(null);
  const [content, setContent] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showIconPicker, setShowIconPicker] = useState(false);
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    // Fetch journal data based on journalID
    const fetchData = async () => {
      try {
        const response = await axiosInstance.getJournalById(journalID);
        console.log("Response: ", response);
        setChosenEmoji(response.mood);
        setJournalData(response);
      } catch (error) {
        console.error("Error fetching journal data:", error);
      }
    };

    if (journalID) {
      fetchData();
    }
  }, [journalID]);

  const onEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject.emoji);
    setShowIconPicker(false);
  };

  const onSubmit = async (data) => {
    // Combine data from the form and CKEditor
    const updatedJournalData = {
      journalTitle: data.title,
      journalText: content,
      mood: chosenEmoji,
      userId: "user1",
    };

    // Make an API request to update the journal
    try {
      const updatedJournal = await axiosInstance.updateJournal(
        journalID,
        updatedJournalData
      );
      console.log("Journal updated successfully:", updatedJournal);
    } catch (error) {
      console.error("Error updating journal:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-auto flex flex-col h-[800px]"
    >
      {/* Title of The Journal */}
      {journalData && (
        <span className="text-2xl font-semibold mb-4">
          Title: {journalData.journalTitle}
        </span>
      )}
      {/* Use Controller to integrate input with React Hook Form */}
      <Controller
        name="title"
        control={control}
        // defaultValue={"Enter New Title"}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            placeholder={journalData && journalData.journalTitle}
            className="border-[#CCCED1] border-solid border-[1px]"
          />
        )}
      />

      {/* Patient Mood */}
      <span className="text-xl font-semibold my-4">Patient Mood</span>

      <div className="relative">
        {chosenEmoji ? (
          <div className="flex flex-col justify-center items-center">
            <span
              className="text-5xl cursor-pointer"
              onClick={() => setShowIconPicker(true)}
            >
              {chosenEmoji}
            </span>
            <span className="text-gray-400">
              Click on the icon to change your selection{" "}
            </span>
          </div>
        ) : (
          <span
            className="text-gray-400"
            onClick={() => setShowIconPicker(true)}
          >
            Click here to choose your moods
          </span>
        )}

        {showIconPicker && (
          <div className="absolute inset-x-1/4 z-10">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>

      {/* Patient Editor */}
      <span className="text-xl font-semibold my-4">Patient Journal</span>
      <div className="">
        {/* CKEditor configuration remains the same */}
        <CKEditor
          editor={ClassicEditor}
          data={journalData ? journalData.journalText : ""}
          onChange={(event, editor) => {
            const editorData = editor.getData();
            setContent(editorData);
          }}
        />
      </div>

      <div className="w-full flex justify-end mt-3">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default TextEditor;
