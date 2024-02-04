import React from 'react'
// import AccentInput from '../inputs/AccentInput';
import Image from 'next/image';
import ShareActive from "@/public/icons/share-active.svg";
import FavActive from "@/public/icons/fav-active.svg";

export default function PropertyHero() {
    return (
        <section className='wrapper'>
            {/* Top section */}
            <div className="text-white mt-[3rem] lg:mt-[6.875rem]">
                <h1 className="text-[2.625rem] font-bold">
                    Cappadocia St Nino’s Garden
                </h1>
                <div className="mt-6 lg:flex justify-between items-center">
                    <p>Ortahisar, Nevsehir, Turkey</p>
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
                <div className="flex lg:flex-row flex-col gap-6">
                    <div className="flex-grow block">
                        <img
                            className="w-full h-full border-accent border-[2px] rounded-[10px]"
                            src="/images/propertyImage_1.png"
                        />
                    </div>
                    <div className="text-white">
                        <div
                            // onSubmit={(e) => e.preventDefault()}
                            className="border border-accent rounded-[10px] overflow-hidden"
                        >
                            <div className="lg:px-[9.25rem] text-center font-bold text-[1.5rem] py-6 bg-accent">
                                Select check-in date
                            </div>
                            <div className="grid grid-cols-2 px-4 lg:px-[2.5rem] py-[1.25rem] gap-[1.25rem] bg-secondary">
                                {/* <AccentInput />
                <AccentInput /> */}
                                <div className="col-span-2 flex flex-col">
                                    <label
                                        htmlFor="checkIn"
                                        className="text-[1.25rem] font-semibold"
                                    >
                                        Guests
                                    </label>
                                    <select className="mt-3 rounded-[5px] p-[0.875rem] bg-transparent border border-accent placeholder:text-white">
                                        <option>A</option>
                                    </select>
                                </div>

                                {/* Amount Section */}
                                <div className="text-[1.25rem] font-semibold col-span-2">
                                    Night - $45
                                </div>
                                <div className="col-span-2">
                                    <div className="flex justify-between border-b border-accent pb-3">
                                        <div className="font-medium">Night x $45</div>
                                        <div className="font-medium">$225</div>
                                    </div>
                                    {/* <div className="flex justify-between border-b border-accent py-3">
                    <div className="font-medium">Croscout Services Fee</div>
                    <div className="font-medium">$30</div>
                  </div> */}
                                    <div className="flex justify-between items-center mt-3">
                                        <div className="font-medium">Total</div>
                                        <div className="font-medium border border-accent px-3 py-1.5 rounded">
                                            $255
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
                <img
                    src="/images/propertyImage_1.png"
                    className="h-[13rem] rounded-[0.625rem] overflow-hidden border-[2px] border-primary hover-card-shadow transition-all cursor-pointer"
                />
                <img
                    src="/images/propertyImage_1.png"
                    className="h-[13rem] rounded-[0.625rem] overflow-hidden border-[2px] border-primary hover-card-shadow transition-all cursor-pointer"
                />
                <img
                    src="/images/propertyImage_1.png"
                    className="h-[13rem] rounded-[0.625rem] overflow-hidden border-[2px] border-primary hover-card-shadow transition-all cursor-pointer"
                />
                <img
                    src="/images/propertyImage_1.png"
                    className="h-[13rem] rounded-[0.625rem] overflow-hidden border-[2px] border-primary hover-card-shadow transition-all cursor-pointer"
                />
            </div>

            <div className="lg:flex justify-center mt-[3.75rem] hidden">
                <button className="py-4 px-[3.75rem] text-white bg-accent text-[1.25rem] font-bold rounded-[5px]">
                    See More Picture
                </button>
            </div>
        </section>
    );
}
