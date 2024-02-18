import Image from "next/image";

const PropertyDescription = ({ description, image }: { description: string, image: string }) => {
    return (
        <div className="">
            <div className='wrapper'>
                <div className="py-[6.875rem] text-white">
                    <h1 className="text-[2.625rem] text-center font-bold text-white">Property Description</h1>
                    <div className="mt-[3.75rem] flex flex-col md:flex-row justify-between items-center gap-x-10">
                        <div className="flex-1 w-full">
                            <Image height={400} width={400}
                                className="w-full h-full border-accent border-[2px] rounded-[10px]" alt="Image is about this property"
                                src={image}></Image>
                        </div>
                        <p className="flex-1 w-full leading-7 text-justify text-white-50 ">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDescription;