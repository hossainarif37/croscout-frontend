"use client"

import Image from "next/image";
import userImg from "@/public/noavatar.png";
import { useAuthContext } from "@/providers/AuthProvider";
import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getStoredToken } from "@/utils/tokenStorage";
import { IChangePassword, IUserInfo, changePassword, updateUserInfo } from "@/lib/database/authUser";
import toast from "react-hot-toast";

type IPersonalInfo = {
    name: string;
    image: string;
    role: string;
    email: string;
    taxNumber: string;
};

type IPasswordInfo = {
    oldPassword: string;
    newPassword: string;
};

const createFormInstance = <T extends Record<string, unknown>>() => {
    return useForm<T>();
};

const ProfilePage = () => {
    const [currentImage, setCurrentImage] = useState('');
    const [isAgent, setIsAgent] = useState(false);

    const { user } = useAuthContext();
    const [isShow, setIsShow] = useState(false);


    const personalInfoForm = createFormInstance<IPersonalInfo>();
    const passwordForm = createFormInstance<IPasswordInfo>();

    const { formState: { errors }, } = personalInfoForm;
    // const { register, handleSubmit, formState: { errors }, } = personalInfoForm;

    // handler for toggle password show option
    const handleShowPassword = () => {
        setIsShow(!isShow)
    }

    // handler for swich role to agent toggle
    const switchAgentToggle = () => {
        const role = document.getElementById("role");
        // console.log(role);
        if (!isAgent) {
            setIsAgent(true);
            personalInfoForm.setValue("role", "agent");
            personalInfoForm.register("taxNumber", { required: true });
        } else {
            setIsAgent(false);
            personalInfoForm.setValue("role", "user");
            personalInfoForm.unregister("taxNumber");
        }
    }

    // handler for delete image
    const handleDeleteImage = async () => {
        setCurrentImage("");
    };

    const handlePersonalInfoSave: SubmitHandler<IPersonalInfo> = async (data) => {
        const name = data.name;
        const image = currentImage;
        const role = data.role;
        const taxNumber = data.taxNumber;
        const token = getStoredToken();
        const allData = { name, image, role, taxNumber };
        const reqData = { allData, token, id: user?._id }
        if (user && user._id) {
            const dbResponse = await updateUserInfo(reqData)
            if (dbResponse.success) {
                return toast.success(dbResponse?.message)
            } else {
                return toast.error(dbResponse?.error);
            }
        } else {
            console.error('User ID is not available');
        }
    };

    const handleChangePassword: SubmitHandler<IPasswordInfo> = async (data) => {
        const newPassword = data.newPassword;
        const oldPassword = data.oldPassword;
        const updateData = { newPassword, oldPassword };
        const token = getStoredToken();
        if (user && user._id) {
            const reqData: IChangePassword = { updateData, token, id: user._id };
            const dbResponse = await changePassword(reqData);
            if (dbResponse.success) {
                return toast.success(dbResponse?.message)
            } else {
                return toast.error(dbResponse?.error);
            }
        } else {
            // Handle the case where user._id is undefined
            console.error('User ID is not available');
        }
    };
    
    return (
        <div className='min-h-screen'>
            <div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                    <Image className="w-52 h-52 object-cover rounded-full" alt="user image" width={208} height={208} src={currentImage || user?.image || userImg} />
                    <div className="flex justify-start items-center flex-col gap-3">
                        <ImageUploader setCurrentImage={setCurrentImage} />
                        <button onClick={handleDeleteImage} className="bg-red-500 hover:bg-transparent border border-transparent hover:border-red-500 text-white font-semibold px-2 py-2 rounded w-full">Remove Picture</button>
                    </div>
                </div>
                <div className="">
                    <form onSubmit={personalInfoForm.handleSubmit(handlePersonalInfoSave)} className="max-w-lg mx-auto space-y-3 my-6">
                        <h4 className="text-white-50 text-xl">Update Personal Info:</h4>
                        <div className="flex justify-between gap-3 items-center">
                            <label className="text-white-50" htmlFor="name">Name</label>
                            <input {...personalInfoForm.register("name", { required: true })} className="rounded w-52 md:w-96" type="text" defaultValue={user?.name} name="name" id="name" placeholder={errors.name ? "Please Enter Your Name" : "Your Name"} />
                        </div>
                        {/* {<p className="error absolute">Enter your email</p>} */}
                        <div className="flex justify-between gap-3 items-center">
                            <label className="text-white-50" htmlFor="email"  >Email</label>
                            <input {...personalInfoForm.register("email", { required: true })} className="rounded w-52 md:w-96" type="email" name="email" id="email" defaultValue={user?.email} readOnly placeholder={errors.email ? "Please Enter Your Email" : "Your Email"} />
                        </div>
                        <div className="flex justify-between gap-3 items-center relative">
                            <label className="text-white-50" htmlFor="role" defaultValue={user?.role}>Role</label>
                            <input {...personalInfoForm.register("role", { required: true })} className="rounded w-52 md:w-96" type="text" name="role" id="role" defaultValue={user?.role} readOnly placeholder={errors.role ? "Please Enter Your Role" : "Your Role"} />
                            {
                                user?.role === "user" &&
                                <span onClick={switchAgentToggle} className="text-sm absolute top-2 border py-0.5 px-0.5 rounded right-2 cursor-pointer">
                                    {
                                        isAgent ? "Cancel" : "Switch To Agent"
                                    }
                                </span>
                            }
                        </div>
                        {
                            (isAgent || user?.role === "agent") &&
                            <div {...personalInfoForm.register("taxNumber", { required: true })} className="flex justify-between gap-3 items-center" defaultValue={user?.taxNumber}>
                                <label className="text-white-50" htmlFor="taxNumber">Tax ID</label>
                                <input className="rounded w-52 md:w-96" type="text" name="taxNumber" id="taxNumber" defaultValue={user?.taxNumber} maxLength={11} placeholder={errors.taxNumber ? "Please Enter Your Tax Number" : "Your Tax Number"} />
                            </div>
                        }

                        <button className="bg-green-500 hover:bg-transparent border border-transparent hover:border-green-500 text-white font-semibold px-2 py-2 rounded w-full">Save Changes</button>
                    </form>

                    <form onSubmit={passwordForm.handleSubmit(handleChangePassword)} className="max-w-lg mx-auto space-y-3 my-6">
                        <h4 className="text-white-50 text-xl">Update Password:</h4>
                        <div className="flex justify-between gap-3 items-center">
                            <label className="text-white-50" htmlFor="oldPassword">Old Password</label>
                            <input {...passwordForm.register("oldPassword", { required: true })} className="rounded w-52 md:w-96" type="password" name="oldPassword" id="oldPassword" placeholder={passwordForm.formState.errors.oldPassword ? "Please Enter Your Old Password" : "Your Old Password"} />
                        </div>
                        <div className="flex justify-between gap-3 items-center relative">
                            <label className="text-white-50" htmlFor="newPassword">New Password</label>
                            <input {...passwordForm.register("newPassword", { required: true })} className="rounded w-52 md:w-96" type={isShow ? "text" : "password"} name="newPassword" id="newPassword" placeholder={passwordForm.formState.errors.newPassword ? "Please Enter Your New Password" : "Your New Password"} />
                            <span onClick={handleShowPassword} className="text-xl absolute top-3 right-2 cursor-pointer">
                                {
                                    isShow ?
                                        <FaEyeSlash></FaEyeSlash>
                                        :
                                        <FaEye></FaEye>
                                }
                            </span>
                        </div>
                        <button className="bg-green-500 hover:bg-transparent border border-transparent hover:border-green-500 text-white font-semibold px-2 py-2 rounded w-full">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;