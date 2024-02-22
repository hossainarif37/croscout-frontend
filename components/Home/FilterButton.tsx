"use client"

import { useSearchContext } from "@/providers/SearchProvider";
import { useToggleContext } from "@/providers/ToggleProvider";
import { goToSpecificSection } from "@/utils/goToSpecificSection";
import Image from "next/image";
import filterButtonStyles from "./fiterbutton.module.css"
import { useEffect, useState } from "react";
import { FaArrowDown, FaSortAlphaDownAlt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { MdEvent } from "react-icons/md";
import { FaSortAlphaDown } from "react-icons/fa";
import { setSearchQuery } from "@/utils/searchQuery";
import { GiSettingsKnobs } from "react-icons/gi";





const FilterButton = () => {
    const { taxToggle, setTaxToggle, filterToggle, setFilterToggle } = useToggleContext();
    const { isFilterSection, setIsFilterSection } = useSearchContext();

    // const isHashLocation = document.location.hash;

    useEffect(() => {
        if (isFilterSection) {
            goToSpecificSection('filter-section');
        }
        setTimeout(() => {
            setIsFilterSection(false);
        }, 2000);
    }, [isFilterSection]);

    const removeSearchQuery = () => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        params.delete("newest");
        params.delete("alphabate");
        params.delete("price");
        url.search = params.toString();
        window.history.pushState(null, '', url.toString());
    };

    const handleNewestFilter = () => {
        removeSearchQuery()
        setSearchQuery("newest", "true")
    }

    const handleAphabaticFilter = (order: string) => {
        if (order === "asc") {
            removeSearchQuery()
            setSearchQuery("alphabate", order)
        }
        else if (order === "dsc") {
            removeSearchQuery()
            setSearchQuery("alphabate", order)
        }
    }

    const handlePriceFilter = (order: string) => {
        if (order === "asc") {
            removeSearchQuery();
            setSearchQuery("price", order)
        }
        else if (order === "dsc") {
            removeSearchQuery();
            setSearchQuery("price", order)
        }
    }

    return (
        <>
            <div id="filter-section" className="mt-10 md:mt-[14rem]" />

            <section>
                <div className="flex gap-2 lg:gap-5 relative">
                    <button className="border px-[0.875rem] rounded-[3px] py-1 lg:py-3" onClick={() => setFilterToggle(!filterToggle)}>
                        <div className="flex items-center gap-2 text-white">
                            {/* <Image src="/icons/filter.svg" height={24} width={24} alt="" /> */}
                            <GiSettingsKnobs className="rotate-90 text-xl" />
                            <div className="">Filters</div>
                        </div>
                    </button>

                    <div className={`${filterButtonStyles.filterMenu} ${filterToggle ? "scale-y-100" : "scale-y-0"}`}>
                        <button onClick={()=> handleNewestFilter()}>
                            Newest <MdEvent className="inline" />
                        </button>
                        <button onClick={() => handleAphabaticFilter("asc")}>
                            Sort A to Z <FaSortAlphaDown className="inline" />
                        </button>
                        <button onClick={() => handleAphabaticFilter("dsc")}>
                            Sort Z to A <FaSortAlphaDownAlt className="inline" />
                        </button>
                        <button onClick={() => handlePriceFilter("asc")}>
                            Price: Low To High <FaArrowUp className="inline" />
                        </button>
                        <button onClick={() => handlePriceFilter("dsc")}>
                            Price: High To Low <FaArrowDown className="inline" />
                        </button>
                    </div>

                    <div className="border px-[0.875rem] rounded-[3px] py-1 lg:py-3">
                        <div className="flex items-center gap-2 relative text-white">
                            <div className="">Display total before taxes</div>
                            <button
                                onClick={() => setTaxToggle((prev) => !prev)}
                                className={`relative w-11 h-6  rounded-full inline-flex items-center cursor-pointer duration-100 ${taxToggle ? 'bg-accent' : 'bg-gray-200'}`}
                            >
                                <div
                                    className={`w-5 absolute transform ${taxToggle ? 'translate-x-full' : 'translate-x-[3px]'
                                        } h-5 rounded-full bg-primary transition-all duration-200`}
                                ></div>
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default FilterButton;