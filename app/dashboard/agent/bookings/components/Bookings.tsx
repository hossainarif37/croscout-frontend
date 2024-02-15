"use client"


import Loading from '@/components/ui/Loading/Loading';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { getBookingsById } from '@/lib/database/getUserBooking';
import { useAuthContext } from '@/providers/AuthProvider';
import Link from 'next/link';
import { manageBookingStatus } from '@/lib/database/manageBookings';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


interface BookingsProps {
    id: number | string; // or string, depending on what type of ID you expect
}
const Bookings = () => {
    type booking = {
        _id: number;
        price: string;
        total: number;
        status: string;
        method: string;
        startDate: string;
        endDate: string;
        updatedAt: string;
    };

    const timeSinceWithoutAbout = (dateString: any) => {
        const date = new Date(dateString);
        const distance = formatDistanceToNow(date, { addSuffix: true });
        return distance.replace(/^about /, '');
    };

    const { user } = useAuthContext();
    const userId = (user?._id);
    // console.log(userId);

    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            if (!userId) {
                console.log('User ID is undefined, skipping fetch');
                return;
            }
            try {
                setIsLoading(true);
                const bookingsData = await getBookingsById(userId);
                const optionSelect = document.getElementById("status") as HTMLInputElement
                if (optionSelect) {
                    optionSelect.value = "pending";
                }
                setBookings(bookingsData.bookings);
                // console.log(bookingsData);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
                setIsLoading(false);
            }
        };

        fetchBookings();
    }, [userId]); // Depend on userId instead of selectedUserId


    const handleStatusChanged = (value: string, id: any) => {
        // console.log(value);
        if (value === "cancel") {
            Swal.fire({
                title: "Are you sure?",
                text: "This booking will remove from everywhere!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                background: "#182237",
                color: "#F9ECE4",
                cancelButtonColor: "#3085d6",
                cancelButtonText: "Close",
                confirmButtonText: "Yes, cancel it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const dbResponse = await manageBookingStatus({ id, action: value })
                    // console.log(dbResponse);
                    if (dbResponse.success) {
                        {
                            toast.success(dbResponse.message);
                            const bookingsData = await getBookingsById(userId);
                            setBookings(bookingsData.bookings);
                            Swal.close();
                            // <Loading />
                        }
                    }
                    else {
                        toast.error(dbResponse.error)
                    }
                }
            });
        }
        if (value === "confirm") {
            Swal.fire({
                title: "Are you sure?",
                text: "This booking status will changed to confirmed!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                background: "#182237",
                color: "#F9ECE4",
                cancelButtonColor: "#3085d6",
                cancelButtonText: "Close",
                confirmButtonText: "Yes, cancel it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const dbResponse = await manageBookingStatus({ id, action: value })
                    if (dbResponse.success) {
                        {
                            toast.success(dbResponse.message);
                            const bookingsData = await getBookingsById(userId);
                            setBookings(bookingsData.bookings);
                            Swal.close();
                        }
                    }
                    else {
                        toast.error(dbResponse.error)
                    }
                }
            });
        }
    }


    if (isLoading) {
        return <Loading />
    }
    // console.log(bookings);
    if ((bookings?.length < 1) || bookings === undefined) {
        return <div className="text-center mt-20 text-white min-h-screen"><h1 className="lg:text-4xl text-2xl text-center">You don't have any bookings.</h1></div>
    }
    return (
        <div className='bg-primary-50 text-secondary-50 min-h-screen'>
            <div className='flex justify-between px-4 pt-4'>
                <h2>Bookings</h2>
            </div>
            {
                bookings?.length > 0 &&
                <div className='p-4'>
                    <div className='w-full  m-auto p-4 rounded-lg overflow-y-auto overflow-x-auto'>
                        <div className='my-3 bg-[#2E374A] p-5 rounded-t-xl grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer font-semibold'>
                            <span>booking</span>
                            <span className='sm:text-left text-right'>Status</span>
                            <span className='hidden md:grid'>Last booking</span>
                            <span className='hidden sm:flex'>Check in <span className='px-8 inline-block'>-</span> Check out</span>
                        </div>
                        <ul>
                            {bookings?.slice().reverse().map((booking: booking, id: number) => (
                                <li
                                    key={id}
                                    className='hover:bg-[#2E374A] bg-primary-50 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
                                >
                                    <div className='flex'>
                                        <div className='bg-purple-100 p-3 rounded-lg'>
                                            <FaShoppingBag className='text-purple-800' />
                                        </div>
                                        <div className='pl-4'>
                                            <p className=' font-bold'>
                                                ${booking?.price}
                                            </p>
                                            <p className=' text-sm'>{user?.name}</p>
                                        </div>
                                    </div>
                                    {
                                        booking.status === "confirmed" ?
                                            <button className='sm:text-left text-right md:text-sm text-xs'>
                                                <span
                                                    className="bg-[#afcfee83] text-white-50 p-2 rounded-md">
                                                    Confirmed
                                                </span>
                                            </button>
                                            :
                                            <select
                                                defaultValue="pending"
                                                onChange={(e) => { handleStatusChanged(e.target.value, booking._id) }}
                                                className='sm:text-left text-right md:text-sm text-xs w-32 bg-primary-50 text-white outline-none p-2 rounded-md' name="status" id="status">
                                                <option value="pending" disabled>Pending</option>
                                                <option value="cancel">Cancel</option>
                                                {
                                                    user?.role === "agent" &&
                                                    <option value="confirm">Confirm</option>
                                                }
                                            </select>
                                    }

                                    <p className='hidden md:flex'>{timeSinceWithoutAbout(booking?.updatedAt)}</p>
                                    <div className='sm:flex hidden justify-between items-center'>
                                        <p className='flex justify-between'>
                                            {format(new Date(booking.startDate), "MMM dd, yyyy")} <span className='px-2 inline-block'>-</span>
                                            {format(new Date(booking.endDate), "MMM dd, yyyy")}
                                        </p>
                                        {/* <BsThreeDotsVertical /> */}
                                        <Link href={`/dashboard/agent/booking-details/${booking?._id}`}>
                                            <button className=' sm:text-left text-right md:text-sm text-xs'>
                                                <span
                                                    className={'bg-secondary-50 text-primary-50 p-2 rounded-md underline'}
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
            }

        </div>
    );
};

export default Bookings;