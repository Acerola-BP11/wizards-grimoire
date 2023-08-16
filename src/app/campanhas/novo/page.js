'use client'

import { Grid, Paper, ThemeProvider, createTheme } from "@mui/material";
import { ImageContext } from "@/app/context/ImageContext";
import CampaignForm from "@/components/Campaign/CampaignForm";

const theme = createTheme({
    palette: {
        mode: "dark"
    }
})

export default function CreateCampaign(){

    return(
        <div className="flex items-center justify-center bg-transparent w-full h-full overflow-auto">
            <div className="py-5 w-full h-full flex flex-col">
                <Grid
                    container
                    direction={"row"}
                    rowSpacing={2}
                    columnSpacing={5}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mt={10}
                    mb={10}
                >
                    <Paper className="bg-black lg:w-1/2 sm:w-full sm:m-5 flex flex-col justify-between border-solid border-2 border-custom-blue">
                        <ThemeProvider theme={theme}>
                            <div>
                                {/* <ImageContext>
                                    <CampaignForm/>
                                </ImageContext> */}
                            </div>
                        </ThemeProvider>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}