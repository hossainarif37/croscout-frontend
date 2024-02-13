"use client"

import { useEffect, useState } from "react";
import PropertyAbout from "../components/PropertyAbout";
import PropertyHero from "../components/PropertyHero";
import PropertyReviews from "../components/PropertyReviews";
import PropertyTestimonial from "../components/PropertyTestimonial";
import { propertyList } from "@/constant";
import { useParams } from "next/navigation";
import { getPropertyById } from "@/lib/database/getProperties";
import Loading from "@/components/ui/Loading/Loading";

// Interface of Properties Data 
export interface IPropertyData {
    property: {
        name: string;
        description: string;
        amenities: string[];
        pricePerNight: number;
        location: string;
        state: string;
        propertyType: string;
        propertyImages: string[];
        owner: string | { _id: string };
        ratings: number;
        guests: number;
        _id: string;
    };
    owner: {
        _id: string;
    };
}


export default function PropertyDetails() {

    const [singlePropertyDetails, setSinglePropertyDetails] = useState<IPropertyData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const navbarId = document.getElementById("topbar")
        if (navbarId) {
            navbarId.scrollIntoView({ behavior: "smooth" })
        }
    }, []);


    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            // if (typeof id === 'string') {
            //     const propertiesData = await getPropertyById(id);
            //     setLoading(false);
            //     setSinglePropertyDetails(propertiesData);
            //     // Set the state with the fetched data
            //     // ...
            // }

            if (typeof id === 'string') {
                const propertiesData = await getPropertyById(id);
                // Transform the owner property if necessary
                if (typeof propertiesData.property.owner === 'string') {
                    propertiesData.property.owner = { _id: propertiesData.property.owner } as IPropertyData['property']['owner'];
                }
                setLoading(false);
                setSinglePropertyDetails({
                    ...propertiesData,
                    property: {
                        ...propertiesData.property,
                        owner: propertiesData.property.owner as IPropertyData['property']['owner'],
                    },
                });
            }

        };

        fetchData();
    }, []);


    if (loading) {
        return <Loading />
    }

    return (
        <div className="">
            <PropertyHero singlePropertyDetails={singlePropertyDetails?.property} />
            <PropertyAbout aboutDetails={singlePropertyDetails?.property} />
            <PropertyTestimonial />
            <PropertyReviews />
        </div>
    );
}