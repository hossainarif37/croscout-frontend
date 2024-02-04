"use client";

import React, { useState } from "react";
// Import Swiper styles
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Slider from "react-slick";
import PropertyTestimonialCard from "./PropertyTestimonailCard";

export default function PropertyTestimonial() {

    const [activeTab, setActiveTab] = useState(0)

    const CustomPrevArrow = (props: any) => (
        <div
            className="hidden custom-next-arrow bg-gray-300 cursor-pointer -left-[10px] lg:-left-[40px] h-[24px] w-[24px] rounded-full lg:flex justify-center items-center"
            onClick={props.onClick}
            style={{ position: "absolute", top: "31%", zIndex: 1 }}
        >
            {/* Your custom arrow content for previous */}
            <BiLeftArrow />
        </div>
    );

    const CustomNextArrow = (props: any) => (
        <div
            className="hidden custom-next-arrow bg-gray-300 cursor-pointer -right-[10px] lg:-right-[40px] h-[24px] w-[24px] rounded-full lg:flex justify-center items-center"
            onClick={props.onClick}
            style={{ position: "absolute", top: "31%", zIndex: 1 }}
        >
            {/* Your custom arrow content for next */}
            <BiRightArrow />
        </div>
    );

    var settings = {
        customPaging: function (i: any) {
            return (
                <a onClick={() => setActiveTab(i)}>
                    <div
                        className={`h-[15px] w-[15px] rounded-full ${activeTab === i ? "bg-accent" : "bg-[#4F6871]"
                            } mt-[3rem]`}
                    ></div>
                </a>
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        beforeChange: (current: number, next: number) => {
            console.log({ current, next })
            setActiveTab(next);
        },
    };

    return (
        <div className="bg-secondary pb-[10rem] pt-[1.5rem]">
            <div className="wrapper">
                <h1 className="text-[2.625rem] font-bold text-center text-white">
                    Our Reviews
                </h1>
                <div className="mt-[4.25rem] grid grid-cols-1 gap-[1.875rem] w-full">
                    <Slider {...settings}>
                        <PropertyTestimonialCard />
                        <PropertyTestimonialCard />
                        <PropertyTestimonialCard />
                        <PropertyTestimonialCard />
                    </Slider>
                </div>
            </div>
        </div>
    );
}
