"use client"
import { getUser } from "@/lib/database/authUser";
import { getStoredToken } from "@/utils/tokenStorage";
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

    // Fetches user data on component mount, sets user state
    const token = getStoredToken();
    useEffect(() => {
        let isMounted = true;
        const fetchUser = async () => {
            if (token && isMounted) {
                const { user } = await getUser({ token });
                setUser(user || null);
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