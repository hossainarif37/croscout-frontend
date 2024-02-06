"use client";

import Image from "next/image";
import React, { useState } from "react";
import StartIcon from "@/public/icons/start.svg";
import FavOutline from "@/public/icons/love-outline.svg";
import FavFilled from "@/public/icons/love-filled.svg";
import ImageCarousel from "./ImageCarousel";
import { useRouter } from "next/navigation";
import { Property } from "@/constant";
import propertyStyles from "./property.module.css"


export default function PropertyCard({ property }: Property & any) {
    const [isActive, setIsActive] = useState(false);
    const [isFav, setIsFav] = useState(true);
    const {
        id,
        name,
        description,
        amenities,
        pricePerNight,
        location,
        state,
        propertyType,
        startDate,
        endDate,
        guests,
        propertyImages,
        ratings,
    } = property;



    const handleHover = () => {
        setIsActive(true);
    };

    const handleHoverOut = () => {
        setIsActive(false);
    };

    const router = useRouter();



    return (
        <div
            // onMouseEnter={handleHover}
            // onMouseLeave={handleHoverOut}

            className={`cursor-pointer relative border border-accent p-[5px] bg-secondary rounded-[8px] text-white `}
        >
            <div className="h-[15rem] w-full relative rounded-t-[4px] overflow-hidden">
                <ImageCarousel propertyId={id} propertyImages={propertyImages} />
            </div>
            <div
                className="p-2 "
                onClick={() => router.push(`/property-details/${id}`)}
            >
                <div
                    className={"mt-5"}>

                    {/* Location and State */}
                    <h1 className="text-xl font-bold">
                        {`${location.substring(0, 10)}, ${state.substring(0, 13)}`}
                    </h1>


                    {/* Property Type */}
                    <p className="mt-[10px]">{propertyType}</p>

                    {/* StartDate and End Date */}
                    <div className="">{startDate.split(',')[0]} - {endDate.split(',')[0]}</div>

                    {/* Price and Ratings */}
                    <div className="flex justify-between mt-[10px]">
                        {/* Price */}
                        <div className="text-accent font-semibold">${pricePerNight} night</div>
                        <div className="flex items-center gap-1.5 border-b border-b-accent">
                            <div className="">
                                <Image src={StartIcon} height={14} width={14} alt="img" />
                            </div>
                            {/* Ratings */}
                            <div className="font-semibold text-accent leading-[100%]">
                                {(
                                    property.ratings.reduce((sum: any, rating: any) => sum + rating, 0) / property.ratings.length || 0
                                ).toFixed(1)}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute z-10 top-5 right-5 cursor-pointer" onClick={() => setIsFav(!isFav)}>
                <Image src={isFav ? FavFilled : FavOutline} alt="" />

            </div>
        </div>
    );
}
