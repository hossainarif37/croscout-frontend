import React from 'react'
import CheckmarkText from './CheckmarkText';

export default function PropertyAbout() {
    return (
        <section className="bg-secondary py-[6.875rem] mt-[6.875rem] text-white text-center">
            <div className='wrapper'>
                <h1 className="text-[2.625rem] font-bold ">About this place</h1>
                <p className="mt-3 leading-[1.625rem]">
                    You won&apos;t want to leave this charming, one-of-a-kind place.
                </p>
                <div className="mt-[3.75rem] grid grid-cols-2 gap-[5.25rem]">
                    <div className="col-span-2 lg:col-span-1 flex flex-col lg:flex-row items-center">
                        <div className="grid grid-cols-2 gap-[3.125rem]">
                            <div className="col-span-2 lg:col-span-1">
                                <CheckmarkText>Lock on bedroom door</CheckmarkText>
                                <CheckmarkText>Garden view</CheckmarkText>
                                <CheckmarkText>Valley view</CheckmarkText>
                                <CheckmarkText>Wifi &ndash; 21 Mbps</CheckmarkText>
                                <CheckmarkText>Dedicated workspace</CheckmarkText>
                            </div>
                            <div className="col-span-2 lg:col-span-1 p-0">
                                <CheckmarkText>Free parking</CheckmarkText>
                                <CheckmarkText>Pets allowed</CheckmarkText>
                                <CheckmarkText>Carbon monoxide alarm</CheckmarkText>
                                <CheckmarkText>Carbon monoxide alarm</CheckmarkText>
                                <CheckmarkText>Smoke alarmSmoke alar</CheckmarkText>
                            </div>
                            <div className="col-span-2 lg:col-span-1 flex items-start m-0 p-0">
                                <button className="w-full lg:w-auto btn-shadow text-white bg-accent py-4 px-[14px] rounded-[5px] font-bold text-[1.25rem]">
                                    Show all 51 amenities
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img
                            className="w-full h-full rounded-[10px]"
                            src="/images/propertyImage_1.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
