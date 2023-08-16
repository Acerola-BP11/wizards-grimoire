'use client'

import { ImageContext } from "@/app/context/ImageContext"
import { useContext } from "react"
import ImageInput from "../ImageInput"
import { Box, TextField } from "@mui/material"
import { CustomEditor } from "../CustomEditor"

export default function CampaignForm() {

    const {selectedImage, imageUrl, setSelectedImage, setImageUrl} = useContext(ImageContext)

    return (
        <form action={''}>
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
            <CustomEditor/>
        </form>
    )
}