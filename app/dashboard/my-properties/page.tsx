"use client"

import Loading from "@/components/ui/Loading/Loading";
import { getPropertiesByUser } from "@/lib/database/getProperties";
import { useAuthContext } from "@/providers/AuthProvider";
import { getStoredToken } from "@/utils/tokenStorage";
import { useEffect, useState } from "react";

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
        <div className="h-screen text-white-50">
            MyProperties: {myProperties?.length}
        </div>
    );
};

export default MyProperties;