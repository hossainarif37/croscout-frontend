"use client"
import Slider from "react-slick";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

export default function CategoryList() {
    const [activeCat, setActiveCat] = useState("Amazing views");

    const CustomPrevArrow = (props: any) => (
        <div
            className="custom-next-arrow bg-gray-300 cursor-pointer -left-[28px] lg:-left-[40px] h-[24px] w-[24px] rounded-full flex justify-center items-center"
            onClick={props.onClick}
            style={{ position: "absolute", top: "31%", zIndex: 1 }}
        >
            {/* Your custom arrow content for previous */}
            <BiLeftArrow />
        </div>
    );

    const CustomNextArrow = (props: any) => (
        <div
            className="custom-next-arrow bg-gray-300 cursor-pointer -right-[28px] lg:-right-[40px] h-[24px] w-[24px] rounded-full flex justify-center items-center"
            onClick={props.onClick}
            style={{ position: 'absolute', top: '31%', zIndex: 1 }}
        >
            {/* Your custom arrow content for next */}
            <BiRightArrow />
        </div>
    );

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const categoryList = [
        { name: "Amazing views", icon: "/icons/amazing-view.svg", active: "/icons/amazing-view-active.svg" },
        { name: "National parks", icon: "/icons/national-parks.svg", active: "/icons/national-parks-active.svg" },
        { name: "Beach", icon: "/icons/beach.svg", active: "/icons/beach-active.svg" },
        { name: "Lake", icon: "/icons/lake.svg", active: "/icons/lake-active.svg" },
        { name: "Caves", icon: "/icons/caves.svg", active: "/icons/caves-active.svg" },
        { name: "Islands", icon: "/icons/islands.svg", active: "/icons/islands-active.svg" },
        { name: "Campers", icon: "/icons/campers.svg", active: "/icons/campers-active.svg" },
        { name: "Castles", icon: "/icons/castles.svg", active: "/icons/castles-active.svg" },
        { name: "Earth homes", icon: "/icons/earth-homes.svg", active: "/icons/earth-homes-active.svg" },
    ];
    return (
        <div className="py-10 w-full px-6 placeholder-cyan-100">
            <Slider {...settings}>
                {categoryList.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveCat(item.name)}
                        className="px-2"
                    >
                        <CategoryCard key={index} category={item} activeCat={activeCat} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}