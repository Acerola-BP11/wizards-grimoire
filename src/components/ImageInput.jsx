'use client'

import { ImageContext } from "@/app/context/ImageContext";
import { Button } from "@mui/material";
import { useContext } from "react";

export default function ImageInput({ width = 300, height = 300 }){
    
    const {selectedImage, imageUrl, setSelectedImage, setImageUrl} = useContext(ImageContext)
    
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
              <Button variant="text" component={'a'} className={`bg-transparent max-h-[300px] max-w-[300px] m-3`} src={imageUrl?imageUrl:'/images/avatar.jpg'}>
                <img src={imageUrl?imageUrl:'/images/avatar.jpg'} className={`max-w-[300px] max-h-[300px] min-w-[300px] min-h-[300px]`}/>
              </Button>
            </label>
        </div>
    )   
}