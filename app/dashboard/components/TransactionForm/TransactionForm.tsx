import React from 'react';

const TransactionForm = () => {
    const data = [4545, 4545, 45, 454, 54, 54];
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
                                Customar Name
                            </th>
                            <th className="p-5 font-semibold">
                                Payment Date
                            </th>
                            <th className="p-5 font-semibold">
                                Booking Duration
                            </th>
                            <th className="p-5 font-semibold">
                                Payment Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, indx) => <tr key={indx} className="hover:bg-[#2E374A] hover:rounded-lg bg-primary-50 my-3 p-2 cursor-pointer">
                                <td className="px-6 py-4 m-5 font-medium">
                                    {indx+1}
                                </td>
                                <td className="px-6 py-4 m-5 font-medium">
                                    4556454s5a6d465ass
                                </td>
                                <td className="px-6 py-4 m-5">
                                    4556454s5a6d465ass
                                </td>
                                <td className="px-6 py-4">
                                    Turan
                                </td>
                                <td className="px-6 py-4 m-5">
                                    225442024
                                </td>
                                <td className="px-6 py-4 m-5">
                                    3 Days
                                </td>
                                <td className="px-6 py-4 m-5">
                                    $454
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionForm;