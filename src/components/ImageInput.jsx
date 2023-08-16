import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ImageInput(){

    const [selectedImage, setSelectedImage] = useState(null)
    const [imageUrl, setImageUrl] = useState(null)

    useEffect(() => {
        if(selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage))
        }
    }, [selectedImage])
    
    
    return(
        <div className="flex flex-col-reverse items-end">
            <input
                accept="image/"
                type="file"
                id="select-image"
                style={{ display: 'none' }}
                onChange={e => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor="select-image">
              <Button variant="text" component='a' className="bg-transparent">
                <Image src={imageUrl?imageUrl:'/images/avatar.jpg'} width={300} height={300}/>
              </Button>
            </label>
        </div>
    )
}