'use client';
import Image from "next/image";
import styles from "./transactions.module.css";
import { format } from "date-fns";


const Transactions = ({ dashboardStats }: any) => {
  return (
    <div className={` ${styles.container}`}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <div className="overflow-x-auto">
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className="">
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {
              dashboardStats?.map((item: any, indx: number) => <tr key={indx}>
                <td>
                  <div className={styles.user}>
                    <Image
                      src="/noavatar.png"
                      alt=""
                      width={40}
                      height={40}
                      className={styles.userImage}
                    />
                    John doe
                  </div>
                </td>
                <td>
                  <span className={`${styles.status} ${styles.pending}`}>
                    {item?.status}
                  </span>
                </td>
                <td>{format(new Date(item?.createdAt), "MMM dd, yyyy")}</td>
                <td>${item?.price}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
