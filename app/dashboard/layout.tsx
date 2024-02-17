"use client"
import React, { ReactNode } from 'react';
import { useModalContext } from '@/providers/ModalProvider';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardSearchFeild from './components/DashboardSearchField/DashboardSearchFeild';
import styles from "@/app/dashboard/components/dashboard.module.css"
import { usePathname, useRouter } from 'next/navigation';
import { useAuthContext } from '@/providers/AuthProvider';
import Loading from '@/components/ui/Loading/Loading';

interface DashboardLayoutProps {
    children: ReactNode;
}



export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const { setSidebarToggle, sidebarToggle } = useModalContext();
    const { loading } = useAuthContext();
    if (loading) {
        return <Loading />
    }
    const handleToggleSidebar = () => {
        setSidebarToggle(false);
    }



    return (
        <div className={`${styles.container}`} >
            <div className={`${styles.menu}`}>
                <Sidebar />
            </div>
            <div className={` ${styles.contain} overflow-auto h-screen py-20 scrollbar ${sidebarToggle && "blur-md pointer-events-auto"}`}>
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
