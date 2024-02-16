"use client"

import StatisticsCard from "./components/StatisticsCard/StatisticsCard";
import Transactions from "./components/Transections/Transections";
import Chart from "./components/Chart/Chart";
import styles from "@/app/dashboard/components/dashboard.module.css"
import { useAuthContext } from "@/providers/AuthProvider";
import { useEffect, useState } from "react";
import { getAllUsers } from "@/lib/database/getUsers";
import loading from "../loading";
import Loading from "@/components/ui/Loading/Loading";
import { getDashboardStats } from "@/lib/database/getDashboardStats";

export interface IBooking {
    guest: string;
    property: string;
    owner: string;
    price: string;
    totalGuests: string;
    startDate: string; // Assuming you want to keep it as a string for frontend
    endDate: string; // Assuming you want to keep it as a string for frontend
    status: 'pending' | 'confirmed' | 'cancelled';
    createdAt: string; // Assuming you want to keep it as a string for frontend
    updatedAt: string; // Assuming you want to keep it as a string for frontend
    agentPaypalEmail?: string;
    paymentInstruction?: string;
    userTransactionId?: string;
}

interface DashboardStats {
    userCount?: number;
    propertyCount?: number;
    totalRevenue?: number;
    latestBookings?: IBooking[];
    agentProperties?: number;
    agentRevenue?: number;
    agentBookings?: number;
    latestAgentBookings?: IBooking[];
}

const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useAuthContext();
    const [dashboardStats, setDashboardStats] = useState<DashboardStats>();


    useEffect(() => {
        if (!user?._id) {
            return;
        }
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const data = await getDashboardStats(user?._id);

                setDashboardStats(data.stats);
                setLoading(false);
            } catch (error) {
                console.error('Error occurred while fetching users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, [user?._id]);

    if (loading) {
        <Loading />
    }



    const cards = [
        {
            id: 1,
            title: user?.role === 'admin' ? "Total Users" : 'Total Properties',
            number: user?.role === 'admin' ? dashboardStats?.userCount : dashboardStats?.agentProperties,
            change: 12,
        },
        {
            id: 2,
            title: user?.role === 'admin' ? "Total Properties" : "Total Bookings",
            number: user?.role === 'admin' ? dashboardStats?.propertyCount : dashboardStats?.agentBookings,
            change: -2,
        },
        {
            id: 3,
            title: user?.role === 'admin' ? "Total Revenue" : "Revenue",
            number: user?.role === 'admin' ? dashboardStats?.totalRevenue : dashboardStats?.agentRevenue,
            change: 18,
        },
    ];
    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    {cards.map((item) => (
                        <StatisticsCard item={item} key={item.id} />
                    ))}
                </div>
                <div className="my-5">
                    <Transactions />
                </div>
                <Chart />
            </div>
        </div>
    );
};

export default Dashboard;