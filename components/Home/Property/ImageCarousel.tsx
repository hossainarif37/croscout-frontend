"use client";

import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


import React from 'react'

export default function ImageCarousel({ propertyImages }: any) {
    const router = useRouter();

    const customLeftControl = (
        <div className="custom-left-control">
            {/* Your custom left control content goes here */}
            <button onClick={() => console.log("Custom Left Control Clicked")}>
                Left
            </button>
        </div>
    );

    const customRightControl = (
        <div className="custom-right-control">
            {/* Your custom right control content goes here */}
            <button onClick={() => console.log("Custom Right Control Clicked")}>
                Right
            </button>
        </div>
    );

    return (
        <div className="h-full">
            <Carousel slide={false}>
                {
                    propertyImages.map((img: any, i: number) => <Image key={i}
                        onClick={() => router.push('/about')}
                        src={img}
                        alt="Property Image"
                        width={300}
                        height={300}
                        // layout="fill"
                        objectFit="cover"
                        className="cursor-pointer h-full"
                    />)
                }
            </Carousel>
        </div>
    );
}