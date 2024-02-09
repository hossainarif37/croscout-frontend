"use client"

import { useEffect } from "react";
import PropertyAbout from "../components/PropertyAbout";
import PropertyHero from "../components/PropertyHero";
import PropertyReviews from "../components/PropertyReviews";
import PropertyTestimonial from "../components/PropertyTestimonial";
import { propertyList } from "@/constant";
import { useParams } from "next/navigation";

export default function PropertyDetails() {
    useEffect(() => {
        const navbarId = document.getElementById("topbar")
        if (navbarId) {
            navbarId.scrollIntoView({ behavior: "smooth" })
        }
    }, []);

    const { id } = useParams();


    const singlePropertyDetails = propertyList.find((property) => property.id === Number(id));

    return (
        <div className="">
            <PropertyHero singlePropertyDetails={singlePropertyDetails} />
            <PropertyAbout />
            <PropertyTestimonial />
            <PropertyReviews />
        </div>
    );
}