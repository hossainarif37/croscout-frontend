"use client"

import { useEffect } from "react";
import PropertyAbout from "../components/PropertyAbout";
import PropertyHero from "../components/PropertyHero";
import PropertyReviews from "../components/PropertyReviews";
import PropertyTestimonial from "../components/PropertyTestimonial";

export default function PropertyDetails() {
    useEffect(() => {
        const navbarId = document.getElementById("topbar")
        if (navbarId) {
            navbarId.scrollIntoView({ behavior: "smooth" })
        }
    }, []);
    return (
        <div className="">
            <PropertyHero />
            <PropertyAbout />
            <PropertyTestimonial />
            <PropertyReviews />
        </div>
    );
}