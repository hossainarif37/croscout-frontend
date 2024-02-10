"use client"
import React, { ReactNode } from 'react';
import { useModalContext } from '@/providers/ModalProvider';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardSearchFeild from './components/DashboardSearchField/DashboardSearchFeild';
import styles from "@/app/dashboard/components/dashboard.module.css"
import { usePathname } from 'next/navigation';

interface DashboardLayoutProps {
    children: ReactNode;
}



export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const { setSidebarToggle, sidebarToggle } = useModalContext();
    const handleToggleSidebar = () => {
        setSidebarToggle(false);
    }


    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div onClick={handleToggleSidebar} className={` ${styles.contain} overflow-hidden ${sidebarToggle && "blur-md pointer-events-auto"}`}>
                <div className='mb-4'>
                    {/* <DashboardSearchFeild /> */}
                </div>
                {children}
            </div>
        </div>
    )
}

function sidebarToggle(arg0: boolean) {
    throw new Error('Function not implemented.');
}
