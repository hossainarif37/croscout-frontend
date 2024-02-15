import { manageBookingStatus } from '@/lib/database/manageBookings';
import { useAuthContext } from '@/providers/AuthProvider';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { format } from 'util';

interface User {
    email: string;
    name: string;
    password: string;
    image: string;
    role: string;
    favoriteList?: string[];
    __v: number;
    _id: string;
    taxNumber: string;
    createdAt: string;
}

interface AllUsersTableProps {
    data: User[];
    tableFor: string;
}


const AllUsersTable: React.FC<AllUsersTableProps> = ({ data, tableFor }) => {
    const { user } = useAuthContext();
    const date: string | undefined = user?.createdAt;
    // const formattedDate = date ? format(new Date(date), "yyyy-MM-dd HH:mm:ss") : "N/A";
    // console.log(formattedDate);
    const handleConfirmAgent = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This user will get all this agent access!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            background: "#182237",
            color: "#F9ECE4",
            cancelButtonColor: "#3085d6",
            cancelButtonText: "Close",
            confirmButtonText: "Yes, confirm it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const dbResponse = await manageBookingStatus({ id, action: value })
                if (dbResponse.success) {
                    {
                        toast.success(dbResponse.message);
                        // const bookingsData = await getBookingsById(userId);
                        // setBookings(bookingsData.bookings);
                        Swal.close();
                    }
                }
                else {
                    toast.error(dbResponse.error)
                }
            }
        });
    }

    const formattedDate = format(new Date(date), "yyyy-MM-dd");
    console.log(formattedDate);
    

    const handleCancelAgent = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This user will get all this agent access!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            background: "#182237",
            color: "#F9ECE4",
            cancelButtonColor: "#3085d6",
            cancelButtonText: "Close",
            confirmButtonText: "Yes, confirm it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const dbResponse = await manageBookingStatus({ id, action: value })
                if (dbResponse.success) {
                    {
                        toast.success(dbResponse.message);
                        // const bookingsData = await getBookingsById(userId);
                        // setBookings(bookingsData.bookings);
                        Swal.close();
                    }
                }
                else {
                    toast.error(dbResponse.error)
                }
            }
        });
    }

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
                                Email
                            </th>
                            <th className="p-5 font-semibold">
                                Name
                            </th>
                            <th className="p-5 font-semibold">
                                User ID
                            </th>
                            <th className="p-5 font-semibold">
                                Joined At
                            </th>
                            {
                                tableFor === "agent" &&
                                <>
                                    <th className="p-5 font-semibold">
                                        Tax ID
                                    </th>
                                    <th className="p-5 font-semibold">
                                        Actions
                                    </th>
                                </>
                            }
                        </tr>
                    </thead>
                    <tbody className='h-[90vh] overflow-hidden'>
                        {
                            data?.map((user, indx) => <tr key={indx} className="hover:bg-[#2E374A] hover:rounded-lg bg-primary-50 my-3 p-2 cursor-pointer">
                                <td className="px-6 py-4 m-5 font-medium">
                                    {indx + 1}
                                </td>
                                <td className="px-6 py-4 m-5">
                                    {user?.name}
                                </td>
                                <td className="px-6 py-4 m-5 font-medium">
                                    {user?.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user?._id}
                                </td>
                                <td className="px-6 py-4 m-5">
                                    {user?.createdAt}
                                </td>
                                {
                                    tableFor === "agent" &&
                                    <>
                                        <td className="px-6 py-4 m-5">
                                            {user?.taxNumber}
                                        </td>
                                        <td className="px-6 py-4 m-5 space-x-2">
                                            <button onClick={handleConfirmAgent} className='sm:text-left text-right md:text-sm text-xs bg-accent text-primary-50 p-2 rounded-md'>
                                                Confirm
                                            </button>
                                            <button onClick={handleCancelAgent} className='sm:text-left text-right md:text-sm text-xs bg-secondary-50 text-primary-50 p-2 rounded-md'>
                                                Cancel
                                            </button>
                                        </td>
                                    </>
                                }
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsersTable;