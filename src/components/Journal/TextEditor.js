import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Picker from "emoji-picker-react";
import { useForm, Controller } from "react-hook-form";
import Button from "../common/Button";
import * as axiosInstance from "../../services/journal";
import Text from "../common/Text";

function TextEditor() {
  const { journalID } = useParams();
  const [journalData, setJournalData] = useState(null);
  const [content, setContent] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState("🥰");
  const [showIconPicker, setShowIconPicker] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    // Fetch journal data based on journalID
    const fetchData = async () => {
      try {
        const response = await axiosInstance.getJournalById(journalID);
        setChosenEmoji(response.mood);
        setJournalData(response);
        console.log(journalData);
        setValue("title", response.journalTitle);
      } catch (error) {
        console.error("Error fetching journal data:", error);
      }
    };

    if (journalID !== "new") {
      fetchData();
    }
  }, [journalID]);

  const onEmojiClick = (emojiObject) => {
    console.log(emojiObject);
    setChosenEmoji(emojiObject.emoji);
    setShowIconPicker(false);
  };

  const onSubmit = async (data) => {
    // Combine data from the form and CKEditor
    const journalDataAPI = {
      journalTitle: data.title,
      journalText: content,
      mood: chosenEmoji,
    };

    // Make an API request to update the journal
    try {
      if (journalID !== "new") {
        const updatedJournal = await axiosInstance.updateJournal(
          journalID,
          journalDataAPI
        );
        console.log("Journal updated successfully:", updatedJournal);
      } else {
        await axiosInstance.createJournal(journalDataAPI).then((res) => {
          console.log(res);
        });
      }
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
      {journalData ? (
        <span className="text-2xl font-semibold mb-4">
          Title: {journalData.journalTitle}
        </span>
      ) : (
        <span className="text-2xl font-semibold mb-4">
          Title: Please Enter Your Title Into Below Input
        </span>
      )}
      {/* Use Controller to integrate input with React Hook Form */}

      {/* Patient Mood */}
      <span className="text-xl font-semibold my-4">Your Mood</span>
      <div className="relative">
        {chosenEmoji && (
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
        )}

        {showIconPicker && (
          <div className="absolute inset-x-1/4 z-10">
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>

      {/* Patient Editor */}
      <span className="text-xl font-semibold my-4">Your Journal Writing</span>
      {/* CKEditor configuration remains the same */}

      <CKEditor
        editor={ClassicEditor}
        data={journalData ? journalData.journalText : ""}
        onChange={(event, editor) => {
          const editorData = editor.getData();
          setContent(editorData);
        }}
      />
      <div className="w-full flex justify-end mt-3">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default TextEditor;
