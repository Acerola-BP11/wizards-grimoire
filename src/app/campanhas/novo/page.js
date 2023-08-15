'use client'

import ImageInput from "@/components/ImageInput";
import { Box, Button, Grid, Input, Paper, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import Image from "next/image";

const theme = createTheme({
    palette: {
        mode: "dark"
    }
})

export default function createCampaign(){

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
                    <Paper className="bg-black lg:w-1/2 sm:w-full flex flex-row justify-between">
                        <ThemeProvider theme={theme}>
                            <Box className='flex flex-row justify-between items-end h-full w-full'>
                                <ImageInput/>
                                <TextField
                                    id='campaign-name'
                                    label='Titulo da Campanha'
                                    variant="outlined"
                                    color={'primary'}
                                    inputMode="text"
                                    required
                                    className="m-5"
                                    margin="dense"
                                    fullWidth
                                />
                            </Box>
                        </ThemeProvider>
                    </Paper>
                </Grid>
            </div>
        </div>
    )
}