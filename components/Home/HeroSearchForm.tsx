"use client"

import { useModalContext } from "@/providers/ModalProvider";
import Image from "next/image";
import PrimaryButton from "../ui/buttons/Button";
import { FaChevronDown } from "react-icons/fa";
import heroStyles from "./hero.module.css"
import { TextInput } from 'flowbite-react';
import { useSearchContext } from "@/providers/SearchProvider";
import { format } from "date-fns";
import { searchProperties } from "@/utils/filterProperties";
import { goToSpecificSection } from "@/utils/goToSpecificSection";

const HeroSearchForm = () => {
    const { setCalenderModal, setGuestModal } = useModalContext();
    const { childrenCount, adultsCount, searchCalDate, location, setLocation, setFilteredProperty, isSearchBtnClicked, setIsSearchBtnClicked } = useSearchContext();


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            goToSpecificSection('filter-section')
            const formattedStartDate = format(searchCalDate[0].startDate, "MMM dd, yyyy");
            const formattedEndDate = format(searchCalDate[0].endDate, "MMM dd, yyyy");
            let guests = childrenCount + adultsCount;
            setIsSearchBtnClicked(true);
            setFilteredProperty(searchProperties({
                location,
                startDate: formattedStartDate,
                guests,
                endDate: formattedEndDate
            }));
        }}>
            {/* Search Label */}
            <div className="flex select-none  justify-center absolute left-0 right-0 -top-10">
                <label
                    htmlFor="search-location"
                    className="flex py-4 md:py-7 hover:shadow-2xl cursor-pointer rounded-full active:scale-[.99] duration-200 text-white bg-primary text-sm md:text-lg "
                >
                    <div className="px-5 md:px-[2.875rem]">Anywhere</div>
                    <div className="px-5 md:px-[2.875rem] border-x border-[#a9a9a9]">
                        Any week
                    </div>
                    <div className="px-5 md:px-[2.875rem]">Add guests</div>
                </label>
            </div>

            {/* Search Form Values */}
            <div className="">

                {/* location */}
                <input
                    className="p-4 mt-6 lg:mt-0 md:p-5 bg-transparent outline-none border border-white-50 focus:border-accent hover:border-accent placeholder:text-gray-300 rounded-[5px] w-full text-white"
                    type=""
                    placeholder="Enter Your location"
                    id="search-location"
                    onChange={(e) => setLocation(e.target.value)}
                />




                <div className="grid grid-cols-2 mt-5 gap-5">

                    {/* Date Selection */}
                    <div
                        onClick={() => setCalenderModal(true)}
                        className={`${heroStyles.dateSelectionButton} col-span-2  lg:col-span-1 divide-x-2 py-3 bg-transparent border duration-100 rounded-[5px] grid grid-cols-2`}>
                        {/* Check In */}
                        <div className="flex  items-center gap-2 text-white px-2 lg:px-5 ">
                            <Image src="/icons/bookingIcon.svg" height={24} width={24} alt="img" />
                            <div className="">
                                <div className="text-sm lg:text-lg leading-[111%]">{format(searchCalDate[0].startDate, "MMM dd, yyyy")}</div>
                                <div className="text-sm lg:text-lg leading-[111%]">{format(searchCalDate[0].startDate, "EEEE")}</div>
                            </div>
                        </div>

                        {/* Check Out */}
                        <div className="flex items-center gap-2 text-white px-2 lg:px-5  relative">
                            <Image src="/icons/bookingIcon.svg" height={24} width={24} alt="img" />
                            <div>
                                <div className="text-sm lg:text-lg leading-[111%]">{format(searchCalDate[0].endDate, "MMM dd, yyyy")}</div>
                                <div className="text-sm lg:text-lg leading-[111%]">{format(searchCalDate[0].endDate, "EEEE")}</div>
                            </div>
                            {/* Down Arrow Button */}
                            <FaChevronDown className={`absolute ${heroStyles.downArrow} right-1 lg:right-4 text-xl lg:text-2xl`} />
                        </div>

                    </div>

                    {/* Add Guest */}
                    <div
                        onClick={() => setGuestModal(true)}
                        className={`${heroStyles.dateSelectionButton} duration-100 mb-8 lg:mb-0 col-span-2 lg:col-span-1 divide-x-2 py-3 bg-transparent border rounded-[5px] cursor-pointer grid grid-cols-2 relative`}>
                        <div className="flex items-center gap-2 text-white px-5 ">
                            <Image src="/icons/people.svg" height={24} width={24} alt="img" />
                            <div className="leading-[111%]">
                                {
                                    adultsCount > 0 || childrenCount > 0 ? (
                                        <>
                                            {adultsCount > 0 && <span>{adultsCount} Adult{adultsCount > 1 && 's'}</span>}
                                            {adultsCount > 0 && childrenCount > 0 && <span>, </span>}
                                            {childrenCount > 0 && <span>{childrenCount} Children{childrenCount > 1 && 's'}</span>}
                                        </>
                                    ) : (
                                        <span>Select Guests</span>
                                    )
                                }
                            </div>
                            <FaChevronDown className={`absolute ${heroStyles.downArrow} right-1 lg:right-4 text-xl lg:text-2xl`} />
                        </div>
                        {/* Down Arrow Button */}

                    </div>
                </div>
            </div>

            {/* Search Button */}
            <div
                className={`flex justify-center absolute left-0 right-0 -bottom-6 lg:-bottom-8 `}

            >
                <button
                    className={`py-2 lg:py-[15px]  px-20
                    rounded-[5px] border  duration-100   text-lg lg:text-2xl  ${!location ? 'bg-gray-700 text-gray-400 border-gray-700' : 'bg-primary border-white text-white font-semibold hover:border-accent'}`}
                    disabled={!location}

                >
                    Search
                </button>

            </div >
        </form>
    );
};

export default HeroSearchForm;