import React, { ReactNode } from 'react';
import styles from "../ui/dashboard/dashboard.module.css"
import "@/app/ui/dashboardGlobal.css"

import DashboardSearchFeild from '../ui/dashboard/DashboardSearchField/DashboardSearchFeild';
import Sidebar from '../ui/dashboard/sidebar/sidebar';


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
                    <DashboardSearchFeild />
                </div>
                {children}
            </div>
        </div>
    )
}