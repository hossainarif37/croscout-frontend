"use client"

import LoginForm from "@/components/AuthComponents/LoginForm";
import { useModalContext } from "@/providers/ModalProvider";

const LoginModal = () => {
    const { loginModal, setLoginModal } = useModalContext();

    return (
        <div className={`fixed z-50 w-full h-full bg-black bg-opacity-30 flex justify-center items-center top-0 right-0 ${loginModal ? 'scale-100' : 'scale-0'}`}>
            <div className={`lg:w-[450px] bg-white rounded-lg text-black relative p-5 duration-300 ${loginModal ? 'scale-100' : 'scale-0'}`}>
                <LoginForm />
            </div>
        </div>
    )
};

export default LoginModal;