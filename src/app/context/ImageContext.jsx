'use client'

import { createContext, useEffect, useState } from "react"

export const ImageContext = createContext()

export default function ImageProvider({ children }) {
    
    const [selectedImage, setSelectedImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useEffect(() => {
        if(selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage))
        }
    }, [selectedImage])

    return(
        <ImageContext.Provider value={{ selectedImage, imageUrl, setSelectedImage, setImageUrl }}>
            {children}
        </ImageContext.Provider>
    )
}