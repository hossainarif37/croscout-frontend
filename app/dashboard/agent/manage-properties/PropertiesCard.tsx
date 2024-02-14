"use client"
import ImageCarousel from '@/components/Home/Property/ImageCarousel';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from "./properties.module.css"

import FavOutline from "@/public/icons/love-outline.svg";
import FavFilled from "@/public/icons/love-filled.svg";
import { Property } from '@/constant';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import Loading from '@/components/ui/Loading/Loading';


const PropertiesCard = ({ property, setDelete }: Property & any) => {
    const {
        _id,
        pricePerNight,
        location,
        state,
        propertyType,
        propertyImages,
    } = property;

    const router = useRouter();

    const handleDelete = async () => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                background: "#182237",
                color: "#F9ECE4",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/properties/${_id}`, {
                        method: 'DELETE',
                    });

                    if (response.ok) {
                        toast.success('Property deleted successfully');
                        <Loading />
                        setDelete(true);
                        // Optionally, you might want to close the modal here
                        Swal.close();
                    } else {
                        toast.error('Failed to delete property');
                    }
                }
            });
        } catch (error) {
            console.error('Error deleting property:', error);
            toast.error('An error occurred while deleting the property');
        }
    };

    return (
        <div
            className={'cursor-pointer relative border border-accent p-[5px] bg-secondary rounded-[8px] text-white '}
        >
            <div className="h-[15rem] w-full relative rounded-t-[4px] overflow-hidden">
                <ImageCarousel propertyId={_id} propertyImages={propertyImages} />
            </div>
            <div
                className="p-2 "
            // onClick={() => router.push(`/property-details/${id}`)}
            >
                <div
                    className={"mt-5"}>

                    {/* Location and State */}
                    <h1 className="text-xl font-bold">
                        {`${location.substring(0, 10)}, ${state.substring(0, 13)}`}
                    </h1>


                    {/* Property Type */}
                    <p className="mt-[10px]">{propertyType}</p>


                    {/* Price and Ratings */}
                    <div className="flex justify-between mt-[10px]">
                        {/* Price */}
                        <div className="text-accent font-semibold">€{pricePerNight} night</div>
                        <div className="flex items-center gap-1.5 border-b border-b-accent">
                            <div className="">
                                {/* <Image src={StartIcon} height={14} width={14} alt="img" /> */}
                            </div>
                            {/* Ratings */}
                            {/* <div className="font-semibold text-accent leading-[100%]">
                                {(
                                    property.ratings.reduce((sum: any, rating: any) => sum + rating, 0) / property.ratings.length || 0
                                ).toFixed(1)}
                            </div> */}


                        </div>
                    </div>
                    <div className={`flex gap-3 mt-4 ${styles.propertiesButton}`}>
                        <button onClick={() => router.push(`/dashboard/agent/edit-properties/${_id}`)} className='hover:bg-green-500  border border-green-500'>Edit</button>
                        <button onClick={handleDelete} className='hover:bg-[#d33] border border-red-500'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesCard;