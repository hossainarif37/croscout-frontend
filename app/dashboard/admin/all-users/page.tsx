"use client"
import Loading from '@/components/ui/Loading/Loading';
import { getAllUsers, getUsersByRole } from '@/lib/database/getUsers';
import React, { useEffect, useState } from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';
import DashboardSearchFeild from '../../components/DashboardSearchField/DashboardSearchFeild';
import { useAuthContext } from '@/providers/AuthProvider';
import AllUsersTable from '../../components/AllUsersTable/AllUsersTable';
import { getStoredToken } from '@/utils/tokenStorage';

const page = () => {
    type user = {
        name: string
        role: string
        email: string
    };
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuthContext();


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const token = getStoredToken();
                if (!token) {
                    throw new Error('Token is required for authorization');
                }
                const data = await getUsersByRole({ role: "user", token });
                setUsers(data.users);
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

    if (users.length <= 0) {
        return <div className="text-center mt-20 text-white min-h-screen"><h1 className="lg:text-4xl text-2xl text-center">Don't register any user yet.</h1></div>
    }
    return (
        <div className='bg-primary-50 px-3 py-3'>
            {/* <div className='mb-5'>
                <DashboardSearchFeild />
            </div> */}
            <h4 className='text-xl mb-3 text-white-50'>All Users:</h4>

            <AllUsersTable data={users} tableFor="user" />
        </div>
    );
};

export default page;