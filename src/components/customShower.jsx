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
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px}",
        promotion: false,
        toolbar: false,
        language: 'pt_BR',
        language_url: '/tinymce/languages/pt_BR.js',
        statusbar: false,
        resize: false,
        content_css: 'dark',
        skin: 'oxide-dark',
        placeholder: 'Insira aqui a descrição da campanha.',
      }}
      value={content}
    />
  );
}