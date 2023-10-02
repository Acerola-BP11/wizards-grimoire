'use client'
import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";
import { ThemeProvider } from "@mui/styles";
import MUIRichTextEditor from "mui-rte";

const myTheme = createTheme({
  status: {
    danger: orange[500]
  }
})

export default function customShower({content}){
  return(
    <ThemeProvider theme={myTheme}>
      <MUIRichTextEditor
        defaultValue={content}
      />
    </ThemeProvider>
  )
}