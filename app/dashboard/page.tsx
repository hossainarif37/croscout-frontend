import StatisticsCard from "./components/StatisticsCard/StatisticsCard";
import Transactions from "./components/Transections/Transections";
import Chart from "./components/Chart/Chart";
import styles from "@/app/dashboard/components/dashboard.module.css"

const Dashboard = () => {
    const cards = [
        {
            id: 1,
            title: "Total Users",
            number: 10.928,
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
