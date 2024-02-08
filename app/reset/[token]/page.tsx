"use client"

import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPassword() {
    const [isShow, setIsShow] = useState(false);
    const passwordRef = useRef<HTMLInputElement>(null);

    // handler for toggle password show option
    const handleShowPassword = () => {
        setIsShow(!isShow)
    }

    // handler for submit reset button 
    const handleResetPassword = () => {
        const password = passwordRef.current?.value;
        console.log(password);
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-sm max-w-lg mx-auto w-full shadow-2xl rounded px-4 py-6">
                <h1 className="text-3xl font-bold text-center text-white my-3">Enter a new password</h1>
                <div className="relative my-3">
                    <input ref={passwordRef} type={isShow ? "text" : "password"} name="password" id="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none" />
                    <button onClick={handleShowPassword} className="text-2xl absolute top-3 right-2">
                        {
                            isShow ?
                                <FaEyeSlash></FaEyeSlash>
                                :
                                <FaEye></FaEye>
                        }
                    </button>
                </div>
                <button onClick={handleResetPassword} type="submit" className="text-lg my-3 flex items-center justify-center rounded-xl relative  py-2 h-[52px] w-full bg-rose-500 hover:bg-rose-400 text-white duration-200 overflow-hidden active:bg-rose-400 z-50 font-semibold">Reset Password</button>
            </div>
        </div>
    );
}