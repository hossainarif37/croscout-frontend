import Link from "next/link";
import PropertyCard from "./PropertyCard";
import PrimaryButton from "@/components/ui/buttons/Button";

const PropertyList = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-5">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
                    <Link
                        href={`/property-details/:${index + 1}`}
                        key={index}
                        className="col-span-4 md:col-span-1"
                    >
                        <PropertyCard />
                    </Link>
                ))}
            </div>
            <div className="my-10">
                <PrimaryButton className="px-5 lg:px-10">Show More</PrimaryButton>
            </div>
        </>

    );
};

export default PropertyList;