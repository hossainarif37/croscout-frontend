"use client"

import LoginForm from "@/components/AuthComponents/LoginForm";
import SignupForm from "@/components/AuthComponents/SignupForm";
import { useModalContext } from "@/providers/ModalProvider";

const SignupModal = () => {
    const { signupModal } = useModalContext();

    return (
        <div className={`fixed z-50 w-full h-full bg-black bg-opacity-30 flex justify-center items-center top-0 right-0 ${signupModal ? 'scale-100' : 'scale-0'}`}>
            <div className={`lg:w-[500px] bg-white rounded-lg text-black relative p-5 duration-300 ${signupModal ? 'scale-100' : 'scale-0'}`}>
                <SignupForm />
            </div>
        </div>
    )
};

export default SignupModal;