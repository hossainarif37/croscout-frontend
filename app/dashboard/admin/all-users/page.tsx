"use client"
import Loading from '@/components/ui/Loading/Loading';
import { getAllUsers } from '@/lib/database/getUsers';
import React, { useEffect, useState } from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';

const page = () => {
    type user = {
        name: string
        role: string
        email: string
    };
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const data = await getAllUsers();
                console.log("Data received from getAllUsers:", data);
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error occurred while fetching users:', error);
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='bg-primary-50 text-secondary-50 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Customers</h2>
                <h2>Welcome Back, Clint</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 rounded-lg  overflow-y-auto'>
                    <div className='my-3 bg-[#2E374A] p-5 rounded-t-xl grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Email</span>
                        <span className='hidden md:grid'>Role</span>
                        <span className='hidden sm:grid'>Tex Number</span>
                    </div>
                    <ul>
                        {users.map((user: user, id: number) => (
                            <li key={id} className=' text-secondary-50 hover:bg-[#2E374A] hover:duration-75 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className='flex items-center'>
                                    <div className='bg-purple-100 p-3 rounded-lg'>
                                        <BsPersonFill className='text-purple-800' />
                                    </div>
                                    <p className='pl-4'>{user?.name}</p>
                                </div>
                                <p className='sm:text-left text-right'>{user.email}</p>
                                <p className='hidden md:flex'>{user.role}</p>
                                <div className='sm:flex hidden justify-between items-center'>
                                    {/* <p>{user.method}</p> */}
                                    {/* <BsThreeDotsVertical /> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;