"use client"

import Loading from "@/components/ui/Loading/Loading";
import { getPropertiesByUser } from "@/lib/database/getProperties";
import { useAuthContext } from "@/providers/AuthProvider";
import { getStoredToken } from "@/utils/tokenStorage";
import { useEffect, useState } from "react";
import PropertiesCard from "./PropertiesCard"
const MyProperties = () => {
    const token = getStoredToken();
    const [myProperties, setMyProperties] = useState([]);
    const { user } = useAuthContext();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        let isMounted = true;
        const fetchMyProperties = async () => {
            if (token && isMounted) {
                const result = await getPropertiesByUser({ token, email: user?.email });
                setMyProperties(result.properties);
                setLoading(false);
            }
            else {
                setMyProperties([]);
                setLoading(false);
            }
        };
        fetchMyProperties();
        return () => {
            isMounted = false;
        };
    }, [token, user]);

    if (loading) {
        return <Loading />
    }

    return (
        <div className="h-screen">
            <div className="text-white-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:grid-cols-4 gap-11">
                {/* MyProperties: {myProperties?.length} */}
                {
                    myProperties?.length > 0 ? (
                        myProperties.map((property, id) => <PropertiesCard key={id} property={property}></PropertiesCard>)
                    ) : (
                        <h2 className="lg:text-2xl text-xl">No properties available.</h2>
                    )
                }
            </div>
        </div>
    );
};

export default MyProperties;