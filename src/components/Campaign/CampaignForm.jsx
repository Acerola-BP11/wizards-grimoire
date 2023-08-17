'use client'

import { ImageContext } from "@/app/context/ImageContext"
import { useContext } from "react"
import ImageInput from "../ImageInput"
import { Box, Button, TextField } from "@mui/material"
import dynamic from "next/dynamic"
import { Controller } from "react-hook-form"
const CustomEditor = dynamic(() => import('@/components/CustomEditor'),
{
    ssr: false
}
)

export default function CampaignForm() {

    const {selectedImage, imageUrl, setSelectedImage, setImageUrl} = useContext(ImageContext)

    function funcao(){
        console.log('teste')
    }

    return (
        <form onSubmit={funcao()}>
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
            <Box className='h-64 w-full overflow-hidden'>
                <Controller>
                    <CustomEditor/>
                </Controller>
            </Box>
            <Button type="submit" variant="contained">
                Maravilhas do lar
            </Button>
        </form>
    )
}