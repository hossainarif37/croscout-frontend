"use client"

import LoginForm from "@/components/AuthComponents/LoginForm";
import { useModalContext } from "@/providers/ModalProvider";
import GuestCounter from "../Inputs/GuestCounter";
import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { useSearchContext } from "@/providers/SearchProvider";

const GuestModal = () => {
    const { guestModal, setGuestModal } = useModalContext();
    const { adultsCount, childrenCount, setAdultsCount, setChildrenCount } = useSearchContext();

    return (
        <div className={`fixed z-50 w-full h-full bg-black bg-opacity-30 flex justify-center items-center top-0 right-0 ${guestModal ? 'scale-100' : 'scale-0'}`}>
            <div className={`lg:w-[450px] bg-white rounded-lg text-black relative p-5 duration-300 ${guestModal ? 'scale-100' : 'scale-0'}`}>
                <div className="flex flex-col gap-8">
                    {/* Close Modal */}
                    <div className="flex justify-between  ">
                        <h3 className="text-3xl font-semibold text-secondary">Guests</h3>
                        <button className="text-4xl" onClick={() => setGuestModal(false)}><IoIosCloseCircle /></button>
                    </div>
                    <GuestCounter
                        onChange={(value) => setAdultsCount(value)}
                        value={adultsCount}
                        title="Adults"
                        subtitle="Ages 13 or above"
                    />
                    <hr />
                    <GuestCounter
                        onChange={(value) => setChildrenCount(value)}
                        value={childrenCount}
                        title="Children"
                        subtitle="Ages 2-12"
                    />
                </div>
                {/* Close Modal */}
                <button className="w-full bg-rose-500 select-none py-3 mt-10 rounded-full text-white hover:bg-rose-400 duration-100" onClick={() => setGuestModal(false)}>Continue</button>
            </div>
        </div>
    )
};

export default GuestModal;