import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Controller, useForm } from "react-hook-form";
import Button from "../common/Button";

function TextEditor({ initialContent }) {
  const [content, setContent] = useState("");
  const handleOnSubmit = () => {
    console.log(content);
  };

  return (
    <div className="overflow-auto h-[700px]">
      <h2 className="text-lg font-semibold my-3">Patient Journal</h2>
      <CKEditor
        editor={ClassicEditor}
        data={initialContent}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
          // console.log(data);
          // console.log(event);
        }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
      <div className="w-full flex justify-end mt-3">
        <Button onClick={handleOnSubmit}>Save</Button>
      </div>
    </div>
  );
}

export default TextEditor;
