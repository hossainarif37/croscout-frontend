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
import MenuLink from './MenuLink/MenuLink';
import { useModalContext } from '@/providers/ModalProvider';


export default function Sidebar() {
    // const { sidebarToggle } = useModalContext();
    // console.log(sidebarToggle);
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
                        <span>User Name</span>
                        <span className='text-sm text-gray-300'>User title</span>
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

            {/*//* ------Mobile Version-------*/}
            {/* <div className={`z-10 block lg:hidden  bg-white w-64 p-5  text-center absolute shadow-lg rounded-md ${sidebarToggle ? 'left-0' : '-left-72'} duration-300 rounded-md`}>
                <ul className="space-y-3 text-gray-500">
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
            </div> */}
        </div>
    )
}
