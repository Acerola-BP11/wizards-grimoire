'use client'

import { ImageContext } from "@/app/context/ImageContext";
import { Button } from "@mui/material";
import { useContext } from "react";

export default function ImageInput( { register } ) {

    const { selectedImage, imageUrl, setSelectedImage, setImageUrl } = useContext(ImageContext);

    return (
        <div className="flex flex-col-reverse items-end">
            <input
                accept="image/"
                type="file"
                id="select-image"
                style={{ display: 'none' }}
                {...register('campaignPicture', {
                    onChange: (e => {
                        setSelectedImage(e.target.files[0])
                    })
                })}
            />
            <label htmlFor="select-image">
                <Button variant="text" component={'a'} className={'max-w-[150px] sm:max-w-[300px] lg:max-w-[500px] min-w-[150px] sm:min-w-[200px] lg:min-w-[300px]'}>
                    <img src={imageUrl ? imageUrl : '/images/avatar.jpg'}/>
                </Button>
            </label>
        </div>
    );   
}
