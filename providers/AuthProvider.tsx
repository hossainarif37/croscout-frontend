"use client"
import { getUser } from "@/lib/database/authUser";
import { setCookie } from "@/utils/authCookie";
// import { getStoredToken } from "@/utils/tokenStorage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";


// Define the User interface
interface User {
    email: string;
    name: string;
    password: string;
    role: string;
    __v: number;
    _id: string;
}


// Interface of Auth Context Props
interface AuthContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Created Context
const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
    children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    // State for user
    const [user, setUser] = useState<User | null>(null);

    // console.log(user);
    // if(user){
    //     console.log('found');
    // }
    // else{
    //     console.log('not found');
    // }

    // Fetches user data on component mount, sets user state
    // const token = getStoredToken();
    useEffect(() => {
        let isMounted = true;
        const fetchUser = async () => {
            if (isMounted) {
                const { user } = await getUser();
                setUser(user);
            }
            else {
                setUser(null)
            }
        };
        fetchUser();
        return () => {
            isMounted = false;
        };
    }, []);

    // Context Values
    const contextValue: AuthContextProps = {
        user,
        setUser
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