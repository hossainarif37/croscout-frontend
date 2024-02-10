"use client"

import { getPropertiesByUser } from "@/lib/database/getProperties";
import { useAuthContext } from "@/providers/AuthProvider";
import { getStoredToken } from "@/utils/tokenStorage";
import { useEffect, useState } from "react";

const MyProperties = () => {
    const token = getStoredToken();
    const [myProperties, setMyProperties] = useState([]);
    const { user } = useAuthContext();
    useEffect(() => {
        let isMounted = true;
        const fetchMyProperties = async () => {
            if (token && isMounted) {
                const result = await getPropertiesByUser({ token, email: user?.email });
                setMyProperties(result.properties);
            }
            else {
                setMyProperties([])
            }
        };
        fetchMyProperties();
        return () => {
            isMounted = false;
        };
    }, [token, user]);

    console.log(29, myProperties);

    return (
        <div className="h-screen text-white-50">
            MyProperties: {myProperties?.length}
        </div>
    );
};

export default MyProperties;