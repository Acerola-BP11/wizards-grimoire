import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

export function CustomEditor(props) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <Editor
      tinymceScriptSrc={"/tinymce/tinymce.min.js"}
      onInit={(evt, editor) => (editorRef.current = editor)}
      
      init={{
        height: 200,
        menubar: false,
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px}",
        promotion: false,
        toolbar: true,
        language: 'pt_BR',
        language_url: 'pt_BR.js',
        statusbar: false,
        resize: false,
        content_css: 'dark',
        skin: 'oxide-dark',
        placeholder: 'Insira aqui a descrição da campanha.',
      }}
      onEditorChange={props.handleOnEditorChange}
    />
  );
}