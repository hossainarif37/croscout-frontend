"use client"
import { useAuthContext } from '@/providers/AuthProvider';
import React from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';

//? Define the User interface with properties for user details
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

//? Define the props for the AllUsersTable component
interface AllUsersTableProps {
    data: User[]; // An array of User objects to display in the table
    tableFor: string; // A string indicating the type of users to display (e.g., "agent")
}


const AllUsersTable: React.FC<AllUsersTableProps> = ({ data, tableFor }) => {
    // Get the current authenticated user from the AuthProvider context
    const { user } = useAuthContext();

    // Get the router object for navigation
    const router = useRouter();

    // Render the table with user data
    return (
        <div className=''>
            <div className="relative overflow-x-auto rounded-lg ">
                <table className="w-full text-left p-4 rtl:text-right rounded-t-xl text-secondary-50 whitespace-nowrap">

                    {/*//?==========Table head Start================*/}
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
                    {/*//?==========Table head End================*/}

                    {/*//?==========Table Body Start================*/}
                    <tbody className=' overflow-hidden'>
                        {
                            //  Map over the user data to create table rows
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
                                {/* Conditionally render the Tax ID cell if the table is for agents */}
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
                            </tr>)
                        }
                    </tbody>
                    {/*//?==========Table body end================*/}
                </table>
            </div>
        </div>
    );
};

export default AllUsersTable;
