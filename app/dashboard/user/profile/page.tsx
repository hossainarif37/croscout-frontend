"use client"
import Image from "next/image";
import userImg from "@/public/noavatar.png"
import { useAuthContext } from "@/providers/AuthProvider";
import { useState } from "react";
import ImageUploader from "./components/ImageUploader";

const ProfilePage = () => {
    const [currentImage, setCurrentImage] = useState('');
    const { user } = useAuthContext();

    const handleDeleteImage = async() => {
        // await deleteImage('your_image_public_id');
        setCurrentImage("")
    }
    return (
        <div className='min-h-screen'>
            <div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                    <Image className="max-w-52 max-h-52 object-cover rounded-full" alt="user image" width={208} height={208}  src={currentImage || userImg}>
                    </Image>
                    {/* <h3 className="text-3xl">UserName</h3> */}
                    <div className="flex justify-start items-center flex-col gap-3">
                        <ImageUploader setCurrentImage={setCurrentImage} />
                        <button onClick={handleDeleteImage} className="bg-red-500 hover:bg-transparent  border border-transparent hover:border-red-500 text-white font-semibold px-2 py-2 rounded w-full">Remove Picture</button>
                    </div>
                </div>
                <div className="">
                    <form action="" className="max-w-lg mx-auto space-y-3 my-6">
                        <h4 className="text-white-50 text-xl">Update Personal Info:</h4>
                        <div className="flex justify-between gap-3 items-center">
                            <label className="text-white-50" htmlFor="name">Name</label>
                            <input className="rounded w-60 md:w-96" type="text" defaultValue={user?.name} name="name" id="name" placeholder="Your Name" />
                        </div>
                        <div className="flex justify-between gap-3 items-center">
                            <label className="text-white-50" htmlFor="email"  >Email</label>
                            <input className="rounded w-60 md:w-96" type="email" name="email" id="email" defaultValue={user?.email} readOnly placeholder="Your Email" />
                        </div>
                        <div className="flex justify-between gap-3 items-center">
                            <label className="text-white-50" htmlFor="role" defaultValue={user?.role}>Role</label>
                            <input className="rounded w-60 md:w-96" type="text" name="role" id="role" defaultValue={"admin"} readOnly placeholder="Your Role" />
                        </div>
                        <div className="flex justify-between gap-3 items-center" defaultValue={user?.taxID}>
                            <label className="text-white-50" htmlFor="taxID">Tax ID</label>
                            <input className="rounded w-60 md:w-96" type="text" name="taxID" id="taxID" maxLength={11} placeholder="Enter your tax ID to be an agent." />
                        </div>
                        <button className="bg-green-500 hover:bg-transparent  border border-transparent hover:border-green-500 text-white font-semibold px-2 py-2 rounded w-full">Save Changes</button>
                    </form>

                    <form action="" className="max-w-lg mx-auto space-y-3 my-6">
                        <h4 className="text-white-50 text-xl">Update Password:</h4>
                        <div className="flex justify-between gap-3 items-center">
                            <label className="text-white-50" htmlFor="currentPassword">Old Password</label>
                            <input className="rounded w-60 md:w-96" type="text" name="currentPassword" id="currentPassword" placeholder="Current Password" />
                        </div>
                        <div className="flex justify-between gap-3 items-center">
                            <label className="text-white-50" htmlFor="newPassword">New Password</label>
                            <input className="rounded w-60 md:w-96" type="text" name="newPassword" id="newPassword" placeholder="Your New Password" />
                        </div>
                        <button className="bg-green-500 hover:bg-transparent  border border-transparent hover:border-green-500 text-white font-semibold px-2 py-2 rounded w-full">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;