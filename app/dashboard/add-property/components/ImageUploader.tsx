"use client"


import { CldUploadWidget, CldUploadWidgetInfo } from 'next-cloudinary';
import { useEffect, useState } from 'react';
import { LuImagePlus } from 'react-icons/lu';

interface UploadResult {
    info?: string | CldUploadWidgetInfo | undefined;
}

interface ImageUploaderProps {
    setImagesArr: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ImageUploader({ setImagesArr }: ImageUploaderProps) {



    function handleUploadSuccess(result: UploadResult) {
        if (typeof result.info === 'object' && result.info !== null && 'secure_url' in result.info) {
            const imageUrl = result.info.secure_url;
            console.log('Uploaded image URL:', imageUrl);
            setImagesArr((prevImagesArr) => [...prevImagesArr, imageUrl]);
        } else {
            console.error('Unexpected result format:', result);
        }
    }

    return (

        <div className=''>
            <CldUploadWidget signatureEndpoint="/api/sign-cloudinary-params"
                onSuccess={handleUploadSuccess}

            >
                {({ open }) => {
                    return (
                        <button type='button' className=' text-white bg-gradient-to-l from-cyan-400 to-cyan-500 py-3 rounded-md  px-10 flex-center gap-x-2  w-full' onClick={() => open()}>
                            <span className='text-2xl'><LuImagePlus /></span>
                            <span>Upload Images</span>
                        </button>
                    );
                }}
            </CldUploadWidget>
        </div>
    );
}