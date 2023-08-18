'use client'

import { Box, Button, Paper, TextField, ThemeProvider, createTheme } from "@mui/material";
import ImageProvider from "@/app/context/ImageContext";
import ImageInput from "@/components/ImageInput";
import dynamic from "next/dynamic"
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { auth } from "@/utils/firebase";
const CustomEditor = dynamic(() => import('@/components/CustomEditor'),
{
    ssr: false
}
)

const theme = createTheme({
    palette: {
        mode: "dark"
    }
})

export const metadata = {
    title: 'O grimório do mago',
    description: 'Site para criação de fichas de D&D 5e',
    viewport: 'width=device-width, initial-scale=1'
  }

export default function CreateCampaign(){

    const { register, handleSubmit, control } = useForm()
    const onSubmit = async (data) => {
        await axios.post('http://localhost:3500/campaign/new', {
            campaignPicture: data.campaignPicture[0],
            campaignName: data.campaignName,
            campaignDescription: data.campaignDescription
        },
        {
            headers: { 
                "Content-Type": "multipart/form-data",
                "Authorization": await auth.currentUser.getIdToken()
            }
        })
}
    return(
        <div className="flex items-center justify-center mt-16">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Paper className="bg-black w-[90vw] mx-5 lg:w-[65vw] lg:mx-0 flex flex-col justify-between border-solid border-4 border-custom-blue">
                        <ThemeProvider theme={theme}>
                            <ImageProvider>
                                    <Box className='flex flex-row justify-between items-end h-full w-full'>
                                        <ImageInput
                                        register={register}
                                        />
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
                                            {...register('campaignName', {required: true, maxLength: 25})}
                                        />
                                    </Box>
                                    <Box className='h-64 w-full overflow-hidden'>
                                        <Controller
                                            name="campaignDescription"
                                            control={control}
                                            defaultValue={''}
                                            render={({field}) => <CustomEditor field={field} /> }
                                        />
                                    </Box>
                            </ImageProvider>
                        </ThemeProvider>
                    </Paper>
                    <div className="w-[90vw] mx-5 lg:w-[65vw] lg:mx-0 flex justify-end">
                        <Button variant="contained" className="bg-custom-blue my-5" type="submit">
                            Enviar
                        </Button>
                    </div>
                </form>

        </div>
    )
}