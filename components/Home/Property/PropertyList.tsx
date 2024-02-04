'use client'
import Link from "next/link";
import PropertyCard from "./PropertyCard";
import PrimaryButton from "@/components/ui/buttons/Button";
import { Property, propertyList } from "@/constant";
import { useSearchContext } from "@/providers/SearchProvider";
import { IoMdClose } from "react-icons/io";
import ClearSearchButton from "@/components/ui/buttons/ClearSearchButton";
import { clearSearchInputValue } from "@/utils/filterProperties";

const PropertyList = () => {
    const { filteredProperty, setFilteredProperty, isSearchBtnClicked, setIsSearchBtnClicked, setLocation, catergoryInputValue } = useSearchContext();

    if (isSearchBtnClicked && filteredProperty.length < 1) {
        return <div className="flex flex-col lg:pb-60 lg:pt-20 pt-10 pb-20 items-center">
            <h1 className="text-4xl font-bold text-white">Not Matched</h1>
            <ClearSearchButton onClick={() => {
                setIsSearchBtnClicked(false);
                clearSearchInputValue();
                setLocation('');

            }} />
        </div>
    }

    console.log(catergoryInputValue);

    return (
        <>

            {/* Clear Search Button */}
            {
                ((isSearchBtnClicked || catergoryInputValue) && filteredProperty.length > 0)
                && <div className="mb-5"><ClearSearchButton
                    onClick={() => {
                        setIsSearchBtnClicked(false);
                        setFilteredProperty([]);
                        clearSearchInputValue();
                        setLocation('');
                    }}
                /></div>
            }

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
