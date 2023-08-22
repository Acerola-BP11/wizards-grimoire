'use client'

import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

export default function CustomShower({content}) {
  const editorRef = useRef(null);

  return (
    <Editor
      tinymceScriptSrc={"/tinymce/tinymce.min.js"}
      onInit={(evt, editor) => (editorRef.current = editor)}
      init={{
        menubar: false,
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; overflow:auto}",
        promotion: false,
        toolbar: false,
        language: 'pt_BR',
        language_url: '/tinymce/languages/pt_BR.js',
        statusbar: false,
        content_css: 'custom-view-only',
        skin: 'custom-view-only',
        plugins: 'autoresize',
        autoresize_bottom_margin: 0
      }}
      value={content}
      disabled={true}
    />
  );
}