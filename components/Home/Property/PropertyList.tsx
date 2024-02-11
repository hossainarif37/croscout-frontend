'use client'
import Link from "next/link";
import PropertyCard from "./PropertyCard";
import PrimaryButton from "@/components/ui/buttons/Button";
import { Property, propertyList } from "@/constant";
import { useSearchContext } from "@/providers/SearchProvider";
import { IoMdClose } from "react-icons/io";
import ClearSearchButton from "@/components/ui/buttons/ClearSearchButton";
import { clearSearchInputValue } from "@/utils/filterProperties";
import { getAllProperty } from "@/lib/database/getProperties";
import Loading from "@/components/ui/Loading/Loading";

const PropertyList = async () => {
    const { filteredProperty, setFilteredProperty, isSearchBtnClicked, setIsSearchBtnClicked, setActiveCat, catergoryInputValue, setCatergoryInputValue, setLocation, setLocationObject } = useSearchContext();

    const properties = await getAllProperty();

    if (isSearchBtnClicked && filteredProperty.length < 1) {
        return <div className="flex flex-col lg:pb-60 lg:pt-20 pt-10 pb-20 items-center">
            <h1 className="text-4xl font-bold text-white">Not Matched</h1>
            <ClearSearchButton onClick={() => {
                setIsSearchBtnClicked(false);
                clearSearchInputValue();
                setCatergoryInputValue('');
                setActiveCat('');
                setLocation('');
                setLocationObject(undefined)

            }} />
        </div>
    }

    // console.log(catergoryInputValue);
    if (properties.length < 1) {
        return <Loading></Loading>
    }
    return (
        <>
            {/* Clear Search Button */}
            {
                ((isSearchBtnClicked || catergoryInputValue) && filteredProperty.length > 0)
                && <div className="mb-5"><ClearSearchButton
                    onClick={() => {
                        setIsSearchBtnClicked(false);
                        setFilteredProperty([]);
                        setCatergoryInputValue('');
                        setActiveCat('');
                        setLocation('');
                        setLocationObject(undefined)
                    }}
                /></div>
            }

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {(filteredProperty.length > 0 && filteredProperty || properties).map((property: Property, index: number) => (
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
