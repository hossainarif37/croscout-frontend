"use client"

import PropertyCard from "@/components/Home/Property/PropertyCard";
import Loading from "@/components/ui/Loading/Loading";
import { getFavorites } from "@/lib/database/getFavorites";
import { useAuthContext } from "@/providers/AuthProvider";
import { useEffect, useState } from "react";
import FavoriteCard from "./components/FavoriteCard";

export interface FavoriteItem {
    _id: string;
    name: string;
    description: string;
    amenities: string[];
    pricePerNight: number;
    location: string;
    state: string;
    propertyType: string;
    owner: string;
    guests: number;
    propertyImages: string[];
    ratings: any[]; // Assuming ratings is an array, replace 'any' with the appropriate type if known
    __v: number;
}

const Favorites = () => {
    const { user } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            if (!user?._id) {
                console.log('User ID is undefined, skipping fetch');
                return;
            }
            try {
                // console.log('Setting isLoading to true');
                setLoading(true);
                const data = await getFavorites(user?._id);

                if (data.success) {
                    setFavorites(data.favoritList);
                } else {
                    console.log(data);
                }
                // console.log('Setting isLoading to false');
                setLoading(false);
            } catch (error) {
                console.log('Error occurred, setting isLoading to false', error);
                setLoading(false);
            }
        };

        fetchBookings();
    }, [user?._id]);

    console.log(favorites)

    if (loading) {
        return <Loading />
    }


    return (
        <div className="h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {favorites?.map((favorite: FavoriteItem, index: number) => (
                    // <Link
                    //     href={`/property-details/${index + 1}`}
                    //     key={index}
                    //     className="col-span-4 md:col-span-1"
                    // >
                    <FavoriteCard key={index} favorite={favorite} />
                    // </Link>
                ))}
            </div>
        </div>
    );
};

export default Favorites;