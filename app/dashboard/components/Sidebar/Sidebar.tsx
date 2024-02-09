"use client"
import React from 'react'
import styles from "./sidebar.module.css"
import userImg from "@/public/noavatar.png"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
} from "react-icons/md";

import Image from 'next/image';
import { IoIosCloseCircle } from 'react-icons/io';
import { useModalContext } from '@/providers/ModalProvider';
import { useAuthContext } from '@/providers/AuthProvider';
import MenuLink from './MenuLink/MenuLink';


export default function Sidebar() {
    const { sidebarToggle, setSidebarToggle } = useModalContext();
    const { user } = useAuthContext();
    const menuItems = [
        {
            title: "Pages",
            list: [
                {
                    title: "Dashboard",
                    path: "/dashboard",
                    icon: <MdDashboard />,
                },
                {
                    title: "Users",
                    path: "/dashboard/users",
                    icon: <MdSupervisedUserCircle />,
                },
                {
                    title: "Products",
                    path: "/dashboard/products",
                    icon: <MdShoppingBag />,
                },
                {
                    title: "Transactions",
                    path: "/dashboard/transactions",
                    icon: <MdAttachMoney />,
                },
            ],
        },
        {
            title: "Analytics",
            list: [
                {
                    title: "Revenue",
                    path: "/dashboard/revenue",
                    icon: <MdWork />,
                },
                {
                    title: "Reports",
                    path: "/dashboard/reports",
                    icon: <MdAnalytics />,
                },
                {
                    title: "Teams",
                    path: "/dashboard/teams",
                    icon: <MdPeople />,
                },
            ],
        },
        {
            title: "User",
            list: [
                {
                    title: "Settings",
                    path: "/dashboard/settings",
                    icon: <MdOutlineSettings />,
                },
                {
                    title: "Help",
                    path: "/dashboard/help",
                    icon: <MdHelpCenter />,
                },
            ],
        },
    ];

    return (
        <div>
            <div className={styles.container}>
                <div className='flex gap-4 items-center mb-4'>
                    <Image src={userImg} alt='userImage' width={50} height={50} className='rounded-full' />
                    <div className='flex flex-col'>
                        <span>{user?.name}</span>
                        <span className='text-sm text-gray-300'>{user?.role}</span>
                    </div>
                </div>
                <ul className={styles.list}>
                    {menuItems.map((cat) => (
                        <li key={cat.title} className='mb-4'>
                            <span className={styles.cat}>{cat.title}</span>
                            {cat.list.map((item) => (
                                <MenuLink item={item} key={item.title} />
                            ))}
                        </li>
                    ))}
                </ul>
            </div>

            {sidebarToggle && <div
                onClick={() => setSidebarToggle(pre => !pre)}
                className="text-3xl cursor-pointer block lg:hidden  top-4 left-5 z-50 fixed ">
                <IoIosCloseCircle />
            </div>}

            {/*//* ------Mobile Version-------*/}
            <div className={`z-40 pt-14 block lg:hidden fixed h-full bg-[#151c2c]  p-5 shadow-lg origin-left top-0 rounded-md ${!sidebarToggle ? 'scale-x-0' : 'scale-x-100 w-72'} duration-300 rounded-md`}>
                <ul className="space-y-3 text-[#b7bac1]">
                    <ul className={styles.list}>
                        {menuItems.map((cat) => (
                            <li key={cat.title} className='mb-4'>
                                <span className={styles.cat}>{cat.title}</span>
                                {cat.list.map((item) => (
                                    <MenuLink item={item} key={item.title} />
                                ))}
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
        </div>
    )
}
