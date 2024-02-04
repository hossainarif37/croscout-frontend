"use client"

import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
    loginModal: boolean;
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
    signupModal: boolean;
    setSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
    calenderModal: boolean;
    setCalenderModal: React.Dispatch<React.SetStateAction<boolean>>;
    guestModal: boolean;
    setGuestModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextProps | null>(null);

interface ModalProviderProps {
    children: ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);
    const [calenderModal, setCalenderModal] = useState(false);
    const [guestModal, setGuestModal] = useState(false);

    const contextValue: ModalContextProps = {
        loginModal,
        setLoginModal,
        signupModal,
        setSignupModal,
        calenderModal,
        setCalenderModal,
        guestModal,
        setGuestModal
    };

    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    );
};

// Custom hook to consume the context
const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }

    return context;
};

export { ModalProvider, useModalContext };
