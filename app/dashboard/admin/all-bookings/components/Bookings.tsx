"use client"
import Loading from '@/components/ui/Loading/Loading';
import { getAllBookings } from '@/lib/database/getBookings';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import { useAuthContext } from '@/providers/AuthProvider';

const Bookings = () => {
    type booking = {
        _id: number;
        price: string;
        total: number;
        guest: {
            name: string;
        },
        status: string;
        method: string;
        startDate: string;
        endDate: string;
        updatedAt: string;
    };
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // console.log(bookings);

    const { user } = useAuthContext();

    // const timeSince = (dateString: any) => {
    //     const date = new Date(dateString);
    //     return formatDistanceToNow(date, { addSuffix: true });
    // };

    const timeSinceWithoutAbout = (dateString: any) => {
        const date = new Date(dateString);
        const distance = formatDistanceToNow(date, { addSuffix: true });
        return distance.replace(/^about /, '');
    };

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                // console.log('Setting isLoading to true');
                setIsLoading(true);
                const data = await getAllBookings();
                setBookings(data);
                // console.log('Setting isLoading to false');
                setIsLoading(false);
            } catch (error) {
                console.log('Error occurred, setting isLoading to false', error);
                setIsLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='bg-primary-50 text-secondary-50 min-h-screen'>
            <div className='flex justify-between px-4 pt-4'>
                <h2>bookings</h2>
            </div>
            <div className='p-4'>
                <div className='w-full  m-auto p-4 rounded-lg overflow-y-auto overflow-x-auto'>
                    <div className='my-3 bg-[#2E374A] p-5 rounded-t-xl grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between font-semibold'>
                        <span>booking</span>
                        <span className='sm:text-left text-right'>Status</span>
                        <span className='hidden md:grid'>Last booking</span>
                        <span className='hidden sm:flex'>Check in <span className='px-8 inline-block'>-</span> Check out</span>
                    </div>
                    <ul>
                        {bookings.slice().reverse().map((booking: booking, id: number) => (
                            <li
                                key={id}
                                className=' bg-primary-50 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between'
                            >
                                <div className='flex'>
                                    <div className='bg-purple-100 p-3 rounded-lg'>
                                        <FaShoppingBag className='text-purple-800' />
                                    </div>
                                    <div className='pl-4'>
                                        <p className=' font-bold'>
                                            ${booking.price}
                                        </p>
                                        <p className=' text-sm'>{booking.guest?.name}</p>
                                    </div>
                                </div>
                                <div className=' sm:text-left text-right md:text-sm text-xs'>
                                    <span
                                        className={
                                            booking.status === 'pending'
                                                ? 'bg-green-300 text-gray-600 p-2 rounded-md'
                                                : booking.status === 'Completed'
                                                    ? 'bg-[#afcfee83] text-white-50 p-2 rounded-md'
                                                    : booking.status === 'Cancelled'
                                                        ? 'bg-[#f773737e] text-white p-2 rounded-md'
                                                        : booking.status === 'Hold' || booking.status == "On Hold"
                                                            ? 'bg-[#f7cb7383] text-white-50 p-2 rounded-md'
                                                            : 'capitalize font-semibold text-accent'
                                        }
                                    >
                                        {booking.status}
                                    </span>
                                </div>
                                <p className='hidden md:flex'>{timeSinceWithoutAbout(booking?.updatedAt)}</p>
                                <div className='sm:flex hidden justify-between items-center'>
                                    <p className='flex justify-between'>
                                        {format(new Date(booking.startDate), "MMM dd, yyyy")} <span className='px-2 inline-block'>-</span>
                                        {format(new Date(booking.endDate), "MMM dd, yyyy")}
                                    </p>
                                    {/* <BsThreeDotsVertical /> */}
                                    <Link href={`/dashboard/admin/booking-details/${booking._id}`}>
                                        <button className=' sm:text-left text-right md:text-sm text-xs'>
                                            <span
                                                className={'text-white border hover:border-white duration-200 border-accent p-2 rounded-md'}
                                            >
                                                Details
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Bookings;