"use client"

import LoginForm from "@/components/AuthComponents/LoginForm";
import { useModalContext } from "@/providers/ModalProvider";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./calenderModal.css"
import { useSearchContext } from "@/providers/SearchProvider";

const CalenderModal = () => {
    const { calenderModal, setCalenderModal } = useModalContext();
    const { searchCalDate, setSearchCalDate } = useSearchContext();

    // console.log(searchCalDate);

    return (
        <div className={`lg:fixed absolute z-50 w-full h-full bg-black bg-opacity-30 flex justify-center items-center top-0 right-0 ${calenderModal ? 'scale-100' : 'scale-0'}`}>
            <div className={`lg:w-[470px]  bg-white rounded-lg text-black relative py-5 px-10 duration-300 ${calenderModal ? 'scale-100' : 'scale-0'}`}>
                {/* Close Modal */}
                <div className="flex justify-end mb-5 text-4xl">
                    <button onClick={() => setCalenderModal(false)}><IoIosCloseCircle /></button>
                </div>

                <div className="full-width-date-range flex flex-col items-center w-full">
                    <DateRange
                        editableDateInputs={true}
                        onChange={(item: any) => setSearchCalDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={searchCalDate}
                        direction="vertical"
                    />
                </div>

                {/* Close Modal */}
                <button className="w-full bg-rose-500 py-3 rounded-full text-white hover:bg-rose-400 duration-100" onClick={() => setCalenderModal(false)}>Continue</button>

            </div>
        </div>
    )
};

export default CalenderModal;