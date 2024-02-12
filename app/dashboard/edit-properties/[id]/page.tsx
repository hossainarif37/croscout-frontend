"use client"
import { useParams, useRouter } from 'next/navigation'
import { Property, categoryList } from "@/constant";;
import React, { useEffect, useState } from 'react';
import { getPropertyById } from '@/lib/database/getProperties';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useAuthContext } from '@/providers/AuthProvider';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import ImageUploader from '../../add-property/components/ImageUploader';
import styles from "../../add-property/components/addProperty.module.css"
import Loading from '@/components/ui/Loading/Loading';


type Inputs = {
    name: string
    description: string
    amenities: string
    pricePerNight: number
    location: string
    state: string
    propertyType: string
    image: string
    owner: string
    ratings: number
    guests: number
}

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
        owner: string;
        ratings: number;
        guests: number;
    };
}

const EditProperties = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm<Inputs>();
    const [imagesArr, setImagesArr] = useState<string[]>([]);
    const [imagesArrError, setImagesArrError] = useState('');
    const [propertiesData, setPropertiesData] = useState<IPropertyData>()
    const { user } = useAuthContext();
    const router = useRouter();
    const removeImage = (index: number) => {
        setImagesArr(prevImages => prevImages.filter((_, i) => i !== index));
        console.log(imagesArr);
    };

    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            if (typeof id === 'string') {
                const propertiesData = await getPropertyById(id);

                setPropertiesData(propertiesData);
                // Set the state with the fetched data
                // ...
                setImagesArr(propertiesData?.property.propertyImages);
            }
        };

        fetchData();
    }, []);



    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (imagesArr.length < 1) {
            return setImagesArrError('Image is required!');
        }
        setImagesArrError('')
        // Convert the amenities string into an array
        const amenitiesArray = data.amenities.split(',').map(amenity => amenity.trim());

        // Construct the final object with the amenities array
        const finalData = {
            ...data,
            amenities: amenitiesArray,
            propertyImages: [...imagesArr],
            owner: user?._id
        };

        console.log(finalData);
        console.log(process.env.NEXT_PUBLIC_SERVER_URL);
        try {

            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/properties/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalData),
            });

            console.log(57, response);
            const result = await response.json();
            if (result.success) {
                toast.success(result.message);
                router.push('/dashboard/my-properties');
            } else {
                toast.error(result.error)
            }

        } catch (error) {
            console.error('Failed to submit property:', error);
        }

    };



    if (!propertiesData?.property.name) {
        return <Loading />
    }

    console.log(propertiesData.property.propertyImages);



    return (
        <div>
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
                                            defaultValue={propertiesData?.property?.name || ''}
                                            {...register("name", { required: true })}
                                        />

                                        {/*//! Error */}
                                        {errors?.name && <p className="text-red-600 mt-1 lg:text-base text-sm">Property name is required!</p>}
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
                                            defaultValue={propertiesData?.property.description}
                                            {...register("description", { required: true })}
                                        ></textarea>

                                        {/*//! Error */}
                                        {errors?.description && <p className="text-red-600 mt-1 lg:text-base text-sm">Description name is required!</p>}
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
                                            defaultValue={propertiesData?.property.amenities.join(',')}
                                            {...register("amenities", { required: true })}
                                        />

                                        {/*//! Error */}
                                        {errors?.amenities && <p className="text-red-600 mt-1 lg:text-base text-sm">Amenities is required!</p>}
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">

                                        {/* Price Per Night */}
                                        <div className="flex flex-col gap-1.5">
                                            <label
                                                htmlFor="pricePerNight"
                                            >
                                                Price per night
                                            </label>
                                            <input
                                                type="number"
                                                id="pricePerNight"
                                                placeholder="PricePerNight"
                                                min="1"
                                                defaultValue={propertiesData?.property.pricePerNight}
                                                {...register("pricePerNight", { required: true })}
                                            />

                                            {/*//! Error */}
                                            {errors?.pricePerNight && <p className="text-red-600 mt-1 lg:text-base text-sm">Price is required!</p>}
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
                                                defaultValue={propertiesData?.property.propertyType}
                                            >
                                                {/* <option value="" selected disabled>Select an option</option> */}
                                                {
                                                    categoryList.map((category, i) => <option
                                                        key={i} value={category.name}>
                                                        {category.name}
                                                    </option>)
                                                }
                                            </select>

                                            {/*//! Error */}
                                            {errors?.propertyType && <p className="text-red-600 mt-1 lg:text-base text-sm">Property type name is required!</p>}
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
                                            <select
                                                id="input-field"
                                                className="form-select"
                                                defaultValue={propertiesData?.property.location}
                                                {...register("location", { required: true })
                                                }
                                            >
                                                <option value="" disabled>Select an option</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Bangladesh">Germany</option>
                                                <option value="Bangladesh">Croatia</option>
                                            </select>


                                            {/*//! Error */}
                                            {errors?.location && <p className="text-red-600 mt-1 lg:text-base text-sm">Location is required!</p>}
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
                                                defaultValue={propertiesData?.property.state}
                                                {...register("state", { required: true })}
                                            >
                                                <option value="" disabled>Select an option</option>
                                                <option value="Dhaka City">Dhaka City</option>
                                                <option value="Dhaka City">Melbourne City</option>
                                                <option value="Dhaka City">California</option>
                                            </select>

                                            {/*//! Error */}
                                            {errors?.state && <p className="text-red-600 mt-1 lg:text-base text-sm">State name is required!</p>}
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
                                            max={10}
                                            min={1}
                                            placeholder="Enter number"
                                            defaultValue={propertiesData?.property.guests}
                                            {...register("guests", { required: true })}
                                        />

                                        {/*//! Error */}
                                        {errors?.guests && <p className="text-red-600 mt-1 lg:text-base text-sm">Guest is required!</p>}
                                    </div>

                                    {/* --------------Upload Images Area End----------------*/}
                                    {

                                        propertiesData.property.propertyImages.length > 0 &&
                                        <div className="flex gap-x-4 w-80">
                                            {
                                                imagesArr.map((imageLink, index) => <button
                                                    type="button"
                                                    key={index}
                                                    className="relative"
                                                >
                                                    <Image src={imageLink}
                                                        alt="" className="rounded-sm h-full"
                                                        width={70} height={70}
                                                    />

                                                    <div
                                                        className="absolute text-white top-0 right-0 bg-black rounded-full bg-opacity-70"
                                                        onClick={() => {
                                                            removeImage(index);
                                                        }}>
                                                        <IoMdClose />
                                                    </div>
                                                </button>

                                                )
                                            }
                                        </div>
                                    }
                                    {/* Image Uploader Component */}
                                    <ImageUploader
                                        setImagesArr={setImagesArr}
                                        defaultImages={propertiesData?.property.propertyImages}
                                    />

                                    {/*//! Error */}
                                    {
                                        imagesArrError && <p className="text-red-500">{imagesArrError}</p>
                                    }
                                    {/* --------------Upload Images Area End----------------*/}


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
                                <div className="flex-center py-3">
                                    <button type="submit" className="  bg-blue-500  rounded-md text-white lg:w-1/2 w-full px-5 py-3 cursor-pointer">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EditProperties;
