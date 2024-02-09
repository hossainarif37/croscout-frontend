"use client"
import React, { ReactNode } from 'react';
import styles from "../ui/dashboard/dashboard.module.css"
import "@/app/ui/dashboardGlobal.css"

import DashboardSearchFeild from '../ui/dashboard/DashboardSearchField/DashboardSearchFeild';
import Sidebar from '../ui/dashboard/sidebar/sidebar';
import { useModalContext } from '@/providers/ModalProvider';


interface DashboardLayoutProps {
    children: ReactNode;
}


export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const { setSidebarToggle } = useModalContext();

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div onClick={() => setSidebarToggle((pre) => !pre)} className={`${styles.contain} overflow-hidden`}>
                <div className='mb-4'>
                    <DashboardSearchFeild />
                </div>
                {children}
            </div>
        </div>
    )
}

function sidebarToggle(arg0: boolean) {
    throw new Error('Function not implemented.');
}