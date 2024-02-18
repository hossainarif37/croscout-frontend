'use client';
import Image from "next/image";
import styles from "./transactions.module.css";
import { format } from "date-fns";
import { useAuthContext } from "@/providers/AuthProvider";


const Transactions = ({ dashboardStats }: any) => {
  const { user } = useAuthContext();
  return (
    <div className={` ${styles.container}`}>
      <h2 className="text-secondary-50">Latest Bookings</h2>
      <div className="overflow-x-auto whitespace-nowrap">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className="">
              <td>Guest Name</td>
              {
                user?.role === "admin" &&
                <td className="ml-14 md:ml-0">Agent Name</td>
              }
              <td className="ml-8 md:ml-0">Status</td>
              <td className="ml-8 md:ml-0">Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {
              dashboardStats?.map((item: any, indx: number) => <tr key={indx}>
                <td>
                  <div className={styles.user}>
                    {item?.guest?.name}
                  </div>
                </td>
                {
                  user?.role === "admin" &&
                  <td>
                    <div className={styles.user}>
                      {item?.owner?.name}
                    </div>
                  </td>
                }

                <td>
                  <span className={`${styles.status} ${item?.status === "confirmed" ? styles.done : styles.pending}`}>
                    {item?.status}
                  </span>
                </td>
                <td>{format(new Date(item?.createdAt), "MMM dd, yyyy")}</td>
                <td>€ {item?.price}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
