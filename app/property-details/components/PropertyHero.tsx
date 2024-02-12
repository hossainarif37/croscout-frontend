"use client"

import React from 'react'
// import AccentInput from '../inputs/AccentInput';
import Image from 'next/image';
import ShareActive from "@/public/icons/share-active.svg";
import FavActive from "@/public/icons/fav-active.svg";
import { FaChevronDown } from 'react-icons/fa';
import { useModalContext } from '@/providers/ModalProvider';
import { useSearchContext } from '@/providers/SearchProvider';
import { differenceInDays, format } from "date-fns";
import { calculateDuration } from '@/utils/calculateDuration';
import { IPropertyData } from '../[id]/page';

interface PropertyHeroProps {
    singlePropertyDetails?: IPropertyData['property'];
}


export default function PropertyHero({ singlePropertyDetails }: PropertyHeroProps) {
    const { setCalenderModal, setGuestModal, setLocationModal } = useModalContext();
    const { childrenCount, adultsCount, searchCalDate, location, setLocation, isSearchBtnClicked, setIsSearchBtnClicked } = useSearchContext();

    console.log(singlePropertyDetails?.propertyImages);

    if (singlePropertyDetails) {
        console.log(singlePropertyDetails?.name);
    } else {
        console.log('singlePropertyDetails is undefined');
    }

    let formattedStartDate: any;

    let formattedEndDate: any;

    // let duration: any = "Any week";

    const startDate = new Date(searchCalDate[0].startDate);
    const endDate = new Date(searchCalDate[0].endDate);
    formattedStartDate = format(startDate, "MMM dd, yyyy");
    formattedEndDate = format(endDate, "MMM dd, yyyy");

    const daysDifference = differenceInDays(endDate, startDate);
    let nightFeeCalculation;
    if (singlePropertyDetails) {

        nightFeeCalculation = daysDifference * singlePropertyDetails.pricePerNight;
    }

    const crouscouteServiceFee = 30;


    // duration = calculateDuration(searchCalDate[0].startDate, searchCalDate[0].endDate);





    // const formattedStartDate = format(new Date(searchCalDate[0].startDate), "MMM dd, yyyy");
    // const formattedEndDate = format(new Date(searchCalDate[0].endDate), "MMM dd, yyyy");






    // Guest Calculation
    let guests = childrenCount + adultsCount;
    return (
        <section className='wrapper'>
            {/* Top section */}
            <div className="text-white mt-[3rem] lg:mt-[6.875rem]">
                <h1 className="text-[2.625rem] font-bold">
                    {singlePropertyDetails?.name}
                </h1>
                <div className="mt-6 lg:flex justify-between items-center">
                    <p>{singlePropertyDetails?.state}, {singlePropertyDetails?.location}</p>
                    <div className="flex items-center gap-16 mt-4 lg:mt-0">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <Image src={ShareActive} height={24} width={24} alt="" />
                            <div>Share</div>
                        </div>
                        <div className="flex items-center gap-3 cursor-pointer">
                            <Image src={FavActive} height={24} width={24} alt="" />
                            <div>Save</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="pt-[3.75rem]">
                <div className=" flex lg:flex-row flex-col gap-6">
                    <div className="flex-1 flex-grow block">
                        {singlePropertyDetails?.propertyImages.slice(0, 1).map((imageUrl: string, index: number) => (
                            <img
                                key={index}
                                className="w-full h-full object-cover border-accent border-[2px] rounded-[10px]"
                                src={imageUrl}
                                alt={`Property Image ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className="text-white">
                        <div
                            // onSubmit={(e) => e.preventDefault()}
                            className="border border-accent rounded-[10px] overflow-hidden"
                        >
                            <div className="lg:px-36 text-center font-bold text-[1.5rem] py-6 bg-accent">
                                Select check-in date
                            </div>
                            <div className="grid grid-cols-2 px-4 lg:px-[2.5rem] py-[1.25rem] gap-[1.25rem] bg-secondary">

                                <div className="col-span-2">
                                    {/* <div className="flex justify-between border-b border-accent pb-3">
                                        <div className="font-medium">Night x $45</div>
                                        <div className="font-medium">$225</div>
                                    </div> */}



                                    {/*//? Check in and check out label */}
                                    <div className='mb-3'>
                                        <label
                                            htmlFor="checkIn"
                                            className="text-[1.25rem] font-semibold"
                                        >
                                            Check in and check out
                                        </label>
                                    </div>

                                    {/*//? Check in and check out input section start */}
                                    <div
                                        onClick={() => setCalenderModal(true)}
                                        className={'mb-10 cursor-pointer border-accent col-span-2  lg:col-span-1 divide-x-2 py-3 bg-transparent border duration-100 rounded-[5px] grid grid-cols-2'}>


                                        {/* Check In */}
                                        <div className="flex  items-center gap-2 text-white px-2 lg:px-5 ">
                                            <Image src="/icons/bookingIcon.svg" height={24} width={24} alt="img" />
                                            <div className="lg:leading-5">
                                                {
                                                    formattedStartDate !== formattedEndDate ? (
                                                        <>
                                                            <div className="text-sm lg:text-base lg:leading-5">
                                                                {format(new Date(searchCalDate[0].startDate), "MMM dd, yyyy")}
                                                            </div>
                                                            <div className="text-sm lg:text-base lg:leading-5">
                                                                {format(new Date(searchCalDate[0].startDate), "EEEE")}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="text-sm lg:text-base lg:leading-5">Check in</div>
                                                            <div className="text-sm lg:leading-5 text-gray-300">Add dates</div>
                                                        </>
                                                    )
                                                }
                                            </div>

                                        </div>

                                        {/* Check Out */}
                                        <div className="flex items-center gap-2 text-white px-2 lg:px-5  relative">
                                            <Image src="/icons/bookingIcon.svg" height={24} width={24} alt="img" />
                                            <div>
                                                {
                                                    formattedStartDate !== formattedEndDate ? (
                                                        <>
                                                            <div className="text-sm lg:text-base lg:leading-5">
                                                                {format(new Date(searchCalDate[0].endDate), "MMM dd, yyyy")}
                                                            </div>
                                                            <div className="text-sm lg:text-base lg:leading-5">
                                                                {format(new Date(searchCalDate[0].endDate), "EEEE")}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="text-sm lg:text-base lg:leading-5">Check out</div>
                                                            <div className="text-sm lg:leading-5 text-gray-300">Add dates</div>
                                                        </>
                                                    )
                                                }

                                            </div>

                                            {/* Down Arrow Button */}
                                            <FaChevronDown className={'absolute right-1 lg:right-4 text-xl '} />

                                        </div>
                                    </div>
                                    {/*//? Check in and check out input section End */}


                                    {/*//? Guest label */}
                                    <div className='mb-3'>
                                        <label
                                            htmlFor="guest"
                                            className="text-[1.25rem] font-semibold"
                                        >
                                            Guests
                                        </label>
                                    </div>

                                    {/*//? Guest input section start */}
                                    <div

                                        onClick={() => setGuestModal(true)}
                                        className={' border-accent duration-100 mb-8 lg:mb-0 col-span-2 lg:col-span-1 divide-x-2 py-3 bg-transparent border rounded-[5px] cursor-pointer grid grid-cols-2 relative'}>



                                        <div className="flex items-center gap-2 text-white px-5 ">
                                            <Image src="/icons/people.svg" height={24} width={24} alt="img" />
                                            <div className="">

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
                                            <FaChevronDown className={'absolute right-1 lg:right-4 text-xl '} />
                                        </div>
                                        {/* Down Arrow Button */}

                                    </div>

                                    {/*//? Guest input section End */}

                                    {/* Amount Section */}
                                    <div className="text-[1.25rem] font-semibold col-span-2 mt-6">
                                        <span className='font-normal'>Per Night</span> - ${singlePropertyDetails?.pricePerNight}
                                    </div>

                                    <div className='flex justify-between lg:text-xl font-semibold my-3'>
                                        <span>({daysDifference} Night X ${singlePropertyDetails?.pricePerNight})</span>
                                        <span>${nightFeeCalculation}</span>
                                    </div>

                                    <div className='border-y border-y-accent py-3 my-5 flex justify-between'>
                                        <span className=''>Croscout Services Fee</span>
                                        <span className=''>${crouscouteServiceFee}</span>
                                    </div>

                                    {/* <div className="flex justify-between border-b border-accent py-3">
                                        <div className="font-medium">Croscout Services Fee</div>
                                        <div className="font-medium">$30</div>
                                    </div> */}
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="font-medium">Total</div>
                                        <div className="font-medium border border-accent px-3 py-1.5 rounded">
                                            ${nightFeeCalculation && nightFeeCalculation + crouscouteServiceFee}
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            style={{
                                                boxShadow: "0px 4px 13px 0px rgba(0, 0, 0, 0.25)",
                                            }}
                                            className="bg-accent mt-9 w-full lg:w-auto text-[1.25rem] font-bold py-4 px-[6.25rem] rounded-[5px]"
                                        >
                                            Reserve
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Multi Images Section */}
            <div className="lg:grid grid-cols-4 gap-6 mt-6 hidden">
                {singlePropertyDetails?.propertyImages.slice(1, 5).map((imageUrl: string, index: number) => (
                    <img
                        key={index}
                        className="w-full h-full border-accent border-[2px] rounded-[10px]"
                        src={imageUrl}
                        alt={`Property Image ${index + 1}`}
                    />
                ))}
            </div>

            <div className="lg:flex justify-center mt-[3.75rem] hidden">
                <button className="py-4 px-[3.75rem] text-white bg-accent text-[1.25rem] font-bold rounded-[5px]">
                    See More Picture
                </button>
            </div>
        </section>
    );
}
