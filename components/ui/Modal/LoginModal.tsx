"use client"

import { useModalContext } from "@/providers/ModalProvider";

const LoginModal = () => {
    const { loginModal, setLoginModal } = useModalContext();

    return (
        <div className={`absolute z-40 w-full h-full bg-black bg-opacity-30 flex justify-center items-center top-0 right-0 ${loginModal ? 'scale-100' : 'scale-0'}`}>
            <div className={`w-96 bg-white text-black relative p-5 duration-200 ${loginModal ? 'scale-100' : 'scale-0'}`}>
                <h1>Login</h1>
                <button
                    className="bg-red-500 py-1 px-3 rounded text-white mt-2"
                    onClick={() => {
                        setLoginModal(false);
                    }}
                >Close</button>
            </div>
        </div>
    )
};

export default LoginModal;