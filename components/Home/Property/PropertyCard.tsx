"use client";

import Image from "next/image";
import React, { useState } from "react";
import StartIcon from "@/public/icons/start.svg";
import FavOutline from "@/public/icons/love-outline.svg";
import FavFilled from "@/public/icons/love-filled.svg";

export default function PropertyCard() {
    const [isActive, setIsActive] = useState(false);
    const [isFav, setIsFav] = useState(true);

    const handleHover = () => {
        setIsActive(true);
    };

    const handleHoverOut = () => {
        setIsActive(false);
    };

    return (
        <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            className=" relative border border-accent p-[5px] bg-secondary rounded-[8px] text-white"
        >
            <div className="h-[15rem] w-full relative rounded-t-[4px] overflow-hidden">

                <Image src="/images/img.png" layout="fill" objectFit="cover" alt="" />

            </div>
            <div className="p-2 mt-5">
                <h1 className="text-xl font-bold">Tambon Phaya Yen, Thailand</h1>
                <p className="mt-[10px]">Mountain views</p>
                <div className="">Jan 5 – 10</div>
                <div className="flex justify-between mt-[10px]">
                    <div className="text-accent font-semibold">$468 night</div>
                    <div className="flex items-center gap-1.5 border-b border-b-accent">
                        <div className="">
                            <Image src={StartIcon} height={14} width={14} alt="img" />
                        </div>
                        <div className="font-semibold text-accent leading-[100%]">5.00</div>
                    </div>
                </div>
            </div>
            <div className="absolute z-10 top-5 right-5 cursor-pointer" onClick={() => setIsFav(!isFav)}>
                <Image src={isFav ? FavFilled : FavOutline} alt="" />
            </div>
        </div>
    );
}
