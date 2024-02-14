"use client"
import { getUser } from "@/lib/database/authUser";
import { setCookie } from "@/utils/authCookie";
import { getStoredToken } from "@/utils/tokenStorage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


// Define the User interface
interface User {
    email: string;
    name: string;
    password: string;
    role: string;
    favoriteList?: string[]; // Represented as an array of strings
    __v: number;
    _id: string;
}



// Interface of Auth Context Props
interface AuthContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

// Created Context
const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // State for user
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);
    // if(user){
    //     console.log('found');
    // }
    // else{
    //     console.log('not found');
    // }

    // Fetches user data on component mount, sets user state
    const token = getStoredToken();
    useEffect(() => {
        let isMounted = true;
        const fetchUser = async () => {
            setLoading(true);
            if (token && isMounted) {
                const { user } = await getUser({ token });
                setUser(user);
                setCookie("authToken", token.split(" ")[1], 24)
                setLoading(false);
            }
            else {
                setUser(null)
                setLoading(false);
            }
        };
        fetchUser();
        return () => {
            isMounted = false;
        };
    }, [token]);

    // Context Values
    const contextValue: AuthContextProps = {
        user,
        setUser,
        loading,
        setLoading
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};


const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }
    return context;
};

export { AuthProvider, useAuthContext };