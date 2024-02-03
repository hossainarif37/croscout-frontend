import Image from "next/image";
import PrimaryButton from "../ui/buttons/Button";

const Hero = () => {
    return (
        <section
            className=" bg-white bg-cover bg-no-repeat pt-10 lg:pt-[8.125rem] lg:h-[35.56rem] pb-20 lg:pb-0"
            style={{ backgroundImage: `url(/images/hero-bg.png)` }}
        >
            <h1
                className=" text-4xl select-none lg:text-[3.5rem] font-extrabold text-white text-center mt-0 lg:mt-5 mb-5"
            >
                Book Your Room Any Place from Any Where
            </h1>
            <p className=" text-white-50 select-none text-xl text-center"
            >
                There are many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some form,
            </p>

            {/* Wrapper */}
            <div className="wrapper">
                <div
                    className="bg-secondary py-4 px-4 md:py-[5.625rem] md:px-40 rounded-[10px] mt-[5.25rem] relative m-shadow "
                >
                    <div
                        className="flex justify-center absolute left-0 right-0 -top-10 "
                    >
                        <div
                            className="flex py-4 md:py-7  text-white bg-primary rounded-[5px] text-sm md:text-lg "
                        >
                            <div className="px-5 md:px-[2.875rem]">Anywhere</div>
                            <div className="px-5 md:px-[2.875rem] border-x border-[#A9A9A9]">
                                Any week
                            </div>
                            <div className="px-5 md:px-[2.875rem]">Add guests</div>
                        </div>
                    </div>

                    <div className="">
                        <input
                            className="p-4 mt-6 lg:mt-0 md:p-5 bg-transparent outline-none focus:border-accent border rounded-[5px] w-full text-white"
                            type="text"
                            placeholder="Enter Your Destination"
                        />
                        <div className="grid grid-cols-2 mt-5 gap-5">
                            <div className="col-span-2 lg:col-span-1 divide-x-2 py-3 bg-transparent border rounded-[5px] grid grid-cols-2">
                                <div className="flex items-center gap-2 text-white px-2 lg:px-5 cursor-pointer">
                                    <Image src="/icons/bookingIcon.svg" height={24} width={24} alt="img" />
                                    <div className="">
                                        <div className="leading-[111%]">Dec 17, 2023</div>
                                        <div className="leading-[111%]">Sun day</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-white px-2 lg:px-5 cursor-pointer">
                                    <Image src="/icons/bookingIcon.svg" height={24} width={24} alt="img" />
                                    <div>
                                        <div className="leading-[111%]">Dec 17, 2023</div>
                                        <div className="leading-[111%]">Sun day</div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-8 lg:mb-0 col-span-2 lg:col-span-1 divide-x-2 py-3 bg-transparent border rounded-[5px] grid grid-cols-2">
                                <div className="flex items-center gap-2 text-white px-5 cursor-pointer">
                                    <Image src="/icons/people.svg" height={24} width={24} alt="img" />
                                    <div className="leading-[111%]">2 Adults</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center absolute left-0 right-0 -bottom-6 lg:-bottom-8">
                        <PrimaryButton className="px-5 lg:px-24">Search</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;