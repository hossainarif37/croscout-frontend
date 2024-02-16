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

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalBookings, setTotalBookings] = useState([]);



    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);

                const data = await getAllUsers();

                console.log(data);
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.error('Error occurred while fetching users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        <Loading />
    }

    console.log(users)


    const cards = [
        {
            id: 1,
            title: "Total Users",
            number: users?.length,
            change: 12,
        },
        {
            id: 2,
            title: "Stock",
            number: 8.236,
            change: -2,
        },
        {
            id: 3,
            title: "Revenue",
            number: 6.642,
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