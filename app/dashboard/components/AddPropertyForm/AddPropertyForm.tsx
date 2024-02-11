"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./addProperty.module.css"
import CountrySelect from "@/components/ui/Inputs/CountrySelect";
import { useState } from "react";
import { useCountries } from "@/hooks/useCountries";
import ImageUploader from "../../add-property/components/ImageUploader";
import { categoryList } from "@/constant";
import { Country, State, City } from 'country-state-city';


type Inputs = {
    name: string
    description: string
    amenities: string
    price: number
    location: string
    state: string
    propertyType: string
    image: string
    owner: string
    ratings: number
    guests: number
}
const AddPropertyForm = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Inputs>();
    const [imagesArr, setImagesArr] = useState<string[]>([]);

    const { getAll } = useCountries();


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // Convert the amenities string into an array
        const amenitiesArray = data.amenities.split(',').map(amenity => amenity.trim());

        // Construct the final object with the amenities array
        const finalData = {
            ...data,
            amenities: amenitiesArray,
            images: [...imagesArr]
        };

        console.log(finalData);
    };

    return (
        <div>
            <main className="overflow-auto">
                <div className="mx-auto max-w-6xl space-y-8 lg:p-4 text-secondary-50">
                    <div className="rounded-lg bg-primary-50 text-card-foreground shadow-lg" data-v0-t="card">
                        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.formInput} px-2 py-4 lg:p-12 space-y-4`}>
                            <div className={` grid gap-4`}>

                                {/* Property Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="property-name"
                                    >
                                        Property name
                                    </label>
                                    <input
                                        type="text"
                                        id="property-name"
                                        placeholder="Property name"
                                        {...register("name", { required: true })}
                                    />

                                    {/*//! Error */}
                                    {errors?.name && <p className="text-red-600 mt-1 lg:text-base text-sm">Property name is requeard!</p>}
                                </div>


                                {/* Description */}
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="description"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        placeholder="Description"
                                        {...register("description", { required: true })}
                                    ></textarea>

                                    {/*//! Error */}
                                    {errors?.description && <p className="text-red-600 mt-1 lg:text-base text-sm">Description name is requeard!</p>}
                                </div>
                            </div>
                            {/* <div data-orientation="horizontal" role="none" className="shrink-0 bg-gray-100 h-[1px] w-full"></div> */}
                            <div className="grid gap-4">

                                {/*Amenities  */}
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="amenities"
                                    >
                                        Amenities
                                    </label>
                                    <input
                                        id="amenities"
                                        placeholder="Enter amenities separated by commas (e.g. Wifi, Pool, Kitchen)"
                                        {...register("amenities", { required: true })}
                                    />

                                    {/*//! Error */}
                                    {errors?.amenities && <p className="text-red-600 mt-1 lg:text-base text-sm">Amenities is requeard!</p>}
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">

                                    {/* Price Per Night */}
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="price"
                                        >
                                            Price per night
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            placeholder="Price"
                                            min="1"
                                            {...register("price", { required: true })}
                                        />

                                        {/*//! Error */}
                                        {errors?.price && <p className="text-red-600 mt-1 lg:text-base text-sm">Price is requeard!</p>}
                                    </div>

                                    {/* Property Type */}
                                    <div className={`flex flex-col gap-1.5 `}>
                                        <label
                                            htmlFor="property-type"
                                        >
                                            Property type
                                        </label>
                                        <select id="input-field" className="form-select"
                                            {...register("propertyType", { required: true })}
                                        >
                                            <option value="" selected disabled>Select an option</option>
                                            {
                                                categoryList.map((category) => <option value={category.name}>
                                                    {category.name}
                                                </option>)
                                            }
                                        </select>

                                        {/*//! Error */}
                                        {errors?.propertyType && <p className="text-red-600 mt-1 lg:text-base text-sm">Property type name is requeard!</p>}
                                    </div>
                                </div>

                                <div className={`grid md:grid-cols-2 gap-4 ${styles.state}`}>

                                    {/* Location */}
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="location"
                                        >
                                            Location
                                        </label>
                                        <select id="input-field" className="form-select"
                                            {...register("location", { required: true })}
                                        >
                                            <option value="" disabled>Select an option</option>
                                            {
                                                getAll().map((country) => <option>
                                                    {country.label}
                                                </option>)
                                            }
                                        </select>


                                        {/*//! Error */}
                                        {errors?.location && <p className="text-red-600 mt-1 lg:text-base text-sm">Location is requeard!</p>}
                                    </div>

                                    {/* State */}
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="state"
                                        >
                                            State
                                        </label>
                                        <select
                                            id="state"
                                            className="form-select"
                                            {...register("state", { required: true })}
                                        >
                                            <option value="" disabled>Select an option</option>
                                            {
                                                State.getAllStates().map(state => <option value={state.name}>
                                                    {state.name}
                                                </option>)
                                            }
                                        </select>

                                        {/*//! Error */}
                                        {errors?.state && <p className="text-red-600 mt-1 lg:text-base text-sm">State name is requeard!</p>}
                                    </div>
                                </div>


                                {/* Guests */}
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="guests"
                                    >
                                        Number of guests
                                    </label>
                                    <input
                                        type="number"
                                        className=""
                                        id="guests"
                                        placeholder="Enter number"
                                        {...register("guests", { required: true })}
                                    />

                                    {/*//! Error */}
                                    {errors?.guests && <p className="text-red-600 mt-1 lg:text-base text-sm">Guest is requeard!</p>}
                                </div>

                                {/* Upload Images */}
                                <ImageUploader
                                    setImagesArr={setImagesArr}
                                />
                                {/* <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="images"
                                    >
                                        Property images
                                    </label>
                                    <input
                                        className="p-0"
                                        type="file"
                                        id="images"
                                        placeholder="Images"
                                        {...register("image", { required: true })}
                                    />
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Upload your images here</div>

                                    {errors?.image && <p className="text-red-600 mt-1 lg:text-base text-sm">Property images is requeart!</p>}
                                </div> */}
                            </div>

                            {/* Save Button */}
                            <div className="flex">
                                <button type="submit" className=" w-full bg-blue-500  rounded-md text-white px-4 py-3 cursor-pointer">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AddPropertyForm;
