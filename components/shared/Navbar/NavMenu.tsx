"use client"

import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { VscGlobe } from "react-icons/vsc";
import Avatar from "./Avatar";
import { useState } from "react";
import { FaUser, FaUserCircle } from "react-icons/fa";


const NavMenu = () => {
    const [currentUser, setCurrent] = useState(false);
    return (
        <ul className="flex items-center font-bold gap-7 text-[#f5f5f5]">
            <li><Link href="/croscout-your-home">Croscout Your Home</Link></li>
            <li>
                <Link href="/translation" className="flex-center space-x-2">
                    <span><VscGlobe /> </span>
                    <span>English (Us)</span>
                </Link>
            </li>
            <li><Link href="/currency">$USD</Link></li>

            {/* User Menu Icon */}
            <div
                className="p-4 md:py-1 md:px-2 border-[1px] border-[#A9A9A9] flex flex-row items-center gap-3 rounded-full bg-[#3A4E55] cursor-pointer hover:shadow-md transition"
            >
                <AiOutlineMenu color="white" />
                <div className="hidden md:block">
                    {
                        currentUser ? <Avatar />
                            :
                            <div className="w-7 h-7 rounded-full bg-accent flex-center text-secondary text-sm">
                                <FaUser />
                            </div>
                    }
                </div>
            </div>
        </ul>
    );
};

export default NavMenu;