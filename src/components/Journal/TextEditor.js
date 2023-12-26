import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  // State to hold the content from TinyMCE
  const [editorContent, setEditorContent] = useState("Welcome to TinyMCE!");

  //   Function to handle content change
  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
    console.log(content);
  };
  return (
    <Editor
      apiKey="ycwu065ihoivclfp49ot4693nh71wal5dis2ss1ej05io6tb"
      init={{
        plugins:
          "ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        tinycomments_mode: "embedded",
        tinycomments_author: "Author name",
        mergetags_list: [
          { value: "First.Name", title: "First Name" },
          { value: "Email", title: "Email" },
        ],
        ai_request: (request, respondWith) =>
          respondWith.string(() =>
            Promise.reject("See docs to implement AI Assistant")
          ),
      }}
      initialValue="Welcome to TinyMCE!"
      onChange={(event) => {
        handleEditorChange(event.target.value);
      }}
    />
  );
}
