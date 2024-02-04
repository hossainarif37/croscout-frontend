import PropertyAbout from "../components/PropertyAbout";
import PropertyHero from "../components/PropertyHero";
import PropertyReviews from "../components/PropertyReviews";
import PropertyTestimonial from "../components/PropertyTestimonial";

export default function PropertyDetails() {
    return (
        <div className="">
            <PropertyHero />
            <PropertyAbout />
            <PropertyTestimonial />
            <PropertyReviews />
        </div>
    );
}