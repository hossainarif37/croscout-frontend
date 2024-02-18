import Image from "next/image";

const PropertyDescription = ({ description, image }: { description: string, image: string }) => {
    return (
        <div className="">
            <div className='wrapper'>
                <div className="py-[6.875rem] text-white">
                    <h1 className="text-[2.625rem] font-bold text-white">Property Description</h1>
                    <div className="mt-[3.75rem] grid grid-cols-2 gap-[5.25rem]">
                        <div className="flex-1 w-full">
                            <Image height={400} width={400}
                                className="w-full h-full border-accent border-[2px] rounded-[10px]" alt="Image is about this property"
                                src={image}></Image>
                        </div>
                        <div className="flex-1 w-full">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDescription;