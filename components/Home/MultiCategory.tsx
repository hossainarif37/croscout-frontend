"use client";

import { propertyTypeCategory } from "@/constant";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function MultiCategory() {
    const [activCat, setActiveCat] = useState("Popular");



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-20 bg-secondary">
            <div className="wrapper">
                <p className="text-white font-semibold text-xl">
                    Inspiration for future getaways
                </p>
                <div className="mt-10 flex max-w-screen lg:max-w-full overflow-x-scroll">
                    {propertyTypeCategory.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveCat(item.title)}
                            className={`pb-4 font-semibold border-b ${activCat === item.title && "border-accent"
                                } pr-14 text-white whitespace-nowrap cursor-pointer text-left`}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-6 mt-20 gap-5 lg:gap-20">
                    {propertyTypeCategory[0].subCats.map((item, index) => (
                        <div
                            key={index}
                            className="col-span-3 lg:col-span-1 text-lg font-semibold  cursor-pointer text-white whitespace-nowrap"
                        >
                            <div className="flex items-center gap-2">
                                {item.title}
                                {item?.isArrow && (
                                    <div>
                                        <BsArrowRight />
                                    </div>
                                )}
                            </div>
                            <div className="font-normal text-sm">{item?.subCat}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
