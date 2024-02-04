'use client'
import Link from "next/link";
import PropertyCard from "./PropertyCard";
import PrimaryButton from "@/components/ui/buttons/Button";
import { Property, propertyList } from "@/constant";
import { useSearchContext } from "@/providers/SearchProvider";
import { IoMdClose } from "react-icons/io";

const PropertyList = () => {
    const { filteredProperty, isSearchBtnClicked, setIsSearchBtnClicked } = useSearchContext();

    if (isSearchBtnClicked) {
        return <div className="flex flex-col lg:pb-60 lg:pt-20 pt-10 pb-20 items-center">
            <h1 className="text-4xl font-bold text-white">Not Matched</h1>
            <div className="mt-5">
                <button
                    className="py-3 px-5 border hover:border-accent duration-200 border-white text-white rounded-lg flex-center gap-x-2"
                    onClick={() => setIsSearchBtnClicked(false)}
                ><IoMdClose className="text-2xl" /> <span>Clear Search</span></button>
            </div>
        </div>
    }

    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {(filteredProperty.length > 0 && filteredProperty || propertyList).map((property: Property, index: number) => (
                    // <Link
                    //     href={`/property-details/${index + 1}`}
                    //     key={index}
                    //     className="col-span-4 md:col-span-1"
                    // >
                    <PropertyCard key={index} property={property} />
                    // </Link>
                ))}
            </div>
            <div className="my-10">
                <PrimaryButton className="px-5 lg:px-10">Show More</PrimaryButton>
            </div>
        </>
    );
};

export default PropertyList;
