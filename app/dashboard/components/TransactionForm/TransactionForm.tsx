"use client"
import React from 'react';
import { format } from 'date-fns';
interface TransactionFormProps {
    transaction?: any; // Replace 'any' with the actual type of the transaction
    agentTransaction?: any
}
interface TransactionItem {
    transactionId?: string;
    booking?: string;
    createdAt?: string;
    amount?: number;
    paymentMethod: string;
}
const TransactionForm: React.FC<TransactionFormProps> = ({ transaction }) => {
    
    return (
        <div className=''>
            <div className="relative overflow-x-auto rounded-lg ">
                <table className="w-full text-left p-4 rtl:text-right rounded-t-xl text-secondary-50">
                    <thead className="my-3 bg-[#2E374A] p-5 ">
                        <tr>
                            <th className="p-5 font-semibold">
                                #
                            </th>
                            <th className="p-5 font-semibold">
                                Transaction ID
                            </th>
                            <th className="p-5 font-semibold">
                                Booking ID
                            </th>
                            <th className="p-5 font-semibold">
                                Payment Method
                            </th>
                            <th className="p-5 font-semibold">
                                Transaction Date
                            </th>
                            <th className="p-5 font-semibold">
                                Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            transaction?.transactions?.map((item: TransactionItem, indx: number) => (
                                <tr key={indx} className="hover:bg-[#2E374A] hover:rounded-lg bg-primary-50 my-3 p-2 cursor-pointer">
                                    <td className="px-6 py-4 m-5 font-medium">
                                        {indx + 1}
                                    </td>
                                    <td className="px-6 py-4 m-5 font-medium">
                                        {item?.transactionId}
                                    </td>
                                    <td className="px-6 py-4 m-5">
                                        {item?.booking}
                                    </td>
                                    <td className="px-6 py-4 m-5">
                                        {item?.paymentMethod}
                                    </td>
                                    <td className="px-6 py-4 m-5">
                                        {format(new Date(item?.createdAt || ''), "MMM dd, yyyy")}
                                    </td>
                                    <td className="px-6 py-4 m-5">
                                        <span className='font-semibold mr-.5'>€</span>{item?.amount}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionForm;