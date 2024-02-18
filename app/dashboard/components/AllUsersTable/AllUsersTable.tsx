import { manageBookingStatus } from '@/lib/database/manageBookings';
import { useAuthContext } from '@/providers/AuthProvider';
import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

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
    const router = useRouter();
    // const date: string | undefined = user?.createdAt;

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
                toast.success('message');
                // const bookingsData = await getBookingsById(userId);
                // setBookings(bookingsData.bookings);
                Swal.close();
            }
        });
    }

    // Handle Cancel Agent 
    // const handleCancelAgent = () => {
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "This user will get all this agent access!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#d33",
    //         background: "#182237",
    //         color: "#F9ECE4",
    //         cancelButtonColor: "#3085d6",
    //         cancelButtonText: "Close",
    //         confirmButtonText: "Yes, confirm it!"
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             toast.success("dasdsa");
    //             // const bookingsData = await getBookingsById(userId);
    //             // setBookings(bookingsData.bookings);
    //             Swal.close();
    //         }
    //     });
    // }

    return (
        <div className=''>
            <div className="relative overflow-x-auto rounded-lg ">
                <table className="w-full text-left p-4 rtl:text-right rounded-t-xl text-secondary-50 whitespace-nowrap">
                    <thead className="my-3 bg-[#2E374A] p-5 ">
                        <tr>
                            <th className="lg:p-5 p-3 font-semibold">
                                #
                            </th>
                            <th className="lg:p-5 p-3 font-semibold">
                                Name
                            </th>
                            <th className="lg:p-5 p-3 font-semibold">
                                Email
                            </th>
                            {
                                tableFor === "agent" &&
                                <>
                                    <th className="lg:p-5 p-3 font-semibold">
                                        Tax ID
                                    </th>

                                </>
                            }
                            <th className="lg:p-5 p-3 font-semibold">
                                User ID
                            </th>
                            <th className="lg:p-5 p-3 font-semibold">
                                Joined At
                            </th>
                            <th className="lg:p-5 p-3 font-semibold text-center">
                                Details
                            </th>

                        </tr>
                    </thead>
                    <tbody className=' overflow-hidden'>
                        {
                            data?.map((user, indx) => <tr key={indx} className="hover:bg-[#2E374A] hover:rounded-lg bg-primary-50 my-3 p-2">
                                <td className="lg:px-6 px-4 text-sm lg:text-base py-4 m-5 font-medium">
                                    {indx + 1}
                                </td>
                                <td className="lg:px-6 px-4 text-sm lg:text-base py-4 m-5">
                                    {user?.name}
                                </td>
                                <td className="lg:px-6 px-4 text-sm lg:text-base py-4 m-5 font-medium">
                                    {user?.email}
                                </td>
                                {
                                    tableFor === "agent" &&

                                    <td className="lg:px-6 px-4 text-sm lg:text-base py-4 m-5">
                                        {user?.taxNumber}
                                    </td>
                                }
                                <td className="lg:px-6 px-4 text-sm lg:text-base py-4">
                                    {user?._id}
                                </td>
                                <td className="lg:px-6 px-4 text-sm lg:text-base py-4 m-5">
                                    {format(new Date(user?.createdAt), "MMM dd, yyyy")}
                                </td>

                                <td className="lg:px-6 px-4 text-xs lg:text-sm py-4 m-5 text-center">
                                    <button onClick={() => router.push(`/dashboard/admin/user-details/${user?._id}`)} className='px-4 py-1 rounded-md border border-green-400'>{user.role === 'agent' ? 'Agent' : 'User'} Details</button>
                                </td>


                                {/* {
                                    tableFor === "agent" &&
                                    <>
                                        <td className="px-6 py-4 m-5">
                                            {user?.taxNumber}
                                        </td>
                                        <td className="px-6 py-4 m-5 space-x-2">
                                            <button onClick={() => {handleConfirmAgent()}} className='sm:text-left text-right md:text-sm text-xs bg-accent text-primary-50 p-2 rounded-md'>
                                                Confirm
                                            </button>
                                            <button onClick={() => {handleCancelAgent()}} className='sm:text-left text-right md:text-sm text-xs bg-secondary-50 text-primary-50 p-2 rounded-md'>
                                                Cancel
                                            </button>
                                        </td>
                                    </>
                                } */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsersTable;