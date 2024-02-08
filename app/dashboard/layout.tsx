import React, { ReactNode } from 'react';
import Sidebar from '../ui/dashboard/sidebar/sidebar'
import styles from "../ui/dashboard/dashboard.module.css"
import Navbar from '../ui/dashboard/navbar/navbar'
import "@/app/ui/dashboardGlobal.css"
import { usePathname } from 'next/navigation';


interface DashboardLayoutProps {
    children: ReactNode;
}


export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.contain}>
                <div className='mb-4'>
                    <Navbar />
                </div>
                {children}
            </div>
        </div>
    )
}
