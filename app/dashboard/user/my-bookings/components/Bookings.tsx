"use client"
import Loading from '@/components/ui/Loading/Loading';
import { getAllBookings } from '@/lib/database/getBookings';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaEllipsisV, FaShoppingBag } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';
import { getBookingsById } from '@/lib/database/getUserBooking';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { getAllUsers } from '@/lib/database/getUsers';
import { useAuthContext } from '@/providers/AuthProvider';
import Link from 'next/link';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { manageBookingStatus } from '@/lib/database/manageBookings';
import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';

import styles from "@/app/dashboard/components/Transections/transactions.module.css"


interface BookingsProps {
    id: number | string; // or string, depending on what type of ID you expect
}
const Bookings = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    type booking = {
        _id: string;
        id: number;
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

    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(bookings);

    useEffect(() => {
        const fetchBookings = async () => {
            if (!userId) {
                console.log('User ID is undefined, skipping fetch');
                return;
            }
            try {
                setIsLoading(true);
                const bookingsData = await getBookingsById(userId);
                setBookings(bookingsData.bookings);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
                setIsLoading(false);
            }
        };

        fetchBookings();
    }, [userId]); // Depend on userId instead of selectedUserId

    const router = useRouter();
    if (isLoading) {
        return <Loading />
    }

    if (!bookings || bookings.length === 0) {
        return <div className='h-screen flex-center'>
            <h1 className='text-4xl font-bold text-white-50'>No bookings found. Please book a property.</h1>
        </div>
    }

    const handleStatusChanged = (value: string, id: string) => {
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
                    console.log(dbResponse);
                    if (dbResponse.success) {
                        {
                            toast.success(dbResponse.message);
                            <Loading />
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
    return (
        <div className='bg-primary-50 text-secondary-50 min-h-screen'>
            <div className='flex justify-between px-4 pt-4'>
                <h2>bookings</h2>
            </div>
            {bookings?.length > 0 && <div className='p-4'>
                <div className='w-full  m-auto p-4 rounded-lg overflow-y-auto overflow-x-auto'>
                    <div className='my-3 bg-[#2E374A] p-5 rounded-t-xl grid overflow-x-auto md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer font-semibold'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Status</span>
                        <span className='hidden md:grid'>Last booking</span>
                        <span className='hidden sm:flex'>Check in <span className='px-6 inline-block'>-</span> Check out</span>
                        <span className='hidden md:grid'>Total Price</span>
                    </div>
                    <ul>
                        {bookings?.slice()?.reverse()?.map((booking: booking, id: number | string) => (
                            <li
                                key={id}
                                className=' hover:bg-[#2E374A] bg-primary-50 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer overflow-x-auto'
                            >
                                <div className='flex'>
                                    <div className='bg-purple-100 p-3 rounded-lg'>
                                        <FaShoppingBag className='text-purple-800' />
                                    </div>
                                    <div className='pl-4'>
                                        <p className=' font-bold'>
                                            ${booking.price}
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
                                </div>
                                <div className=' font-semibold relative flex justify-end mr-5' >
                                    <p className='text-left absolute left-3'>$ {booking.price}</p>
                                    <button onClick={() => router.push(`/dashboard/user/booking-details/${booking?._id}`)}>
                                        <button className=' sm:text-left text-right md:text-sm text-xs'>
                                            <span
                                                className={'bg-primary-50 border-accent border text-white-50 px-2 py-1 rounded-md'}
                                            >
                                                Details
                                            </span>
                                        </button>
                                    </button>
                                    <div className='flex flex-col'>
                                        <button onClick={() => router.push(`/dashboard/user/payment-confirmation-message/${booking._id}`)}>Payment</button>
                                        <button onClick={() => router.push(`/dashboard/user/payment-details/${booking._id}`)}>Payment Details</button>
                                        <button onClick={() => router.push(`/dashboard/user/payment-confirmation-message/${booking._id}`)}>Payment</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>}

            {
                bookings === undefined && <div className="text-center mt-20 text-white"><h1 className="text-4xl text-center">You haven't any Booking yet. Please book Property</h1></div>
            }





            {/*//? Mobile version*/}

            {/* <div className={` ${styles.container}`}>
                <h2 className={styles.title}>Latest Transactions</h2>
                <div className="overflow-x-auto">
                    <table className={styles.table}>
                        <thead className={' flex justify-between bg-[#2E374A] rounded-t-xl lg:p-3 p-2'}>
                            <tr className="flex-1">
                                <td>Name</td>
                                <td>Status</td>
                                <td>Last Booking</td>
                                <td><span className='flex lg:text-base text-sm'>Check in <span className='px-6 inline-block'>-</span> Check out</span></td>
                                <td>Total Price</td>
                            </tr>
                        </thead>

                        <tbody className={styles.tbody}>
                            {bookings?.slice()?.reverse()?.map((booking: booking, id: number | string) => (
                                <tr>
                                    <td>
                                        <div className={styles.user}>
                                            <FaShoppingBag className='text-purple-800 bg-white p-2 lg:text-4xl text-3xl rounded-md' />
                                            Hridoy
                                        </div>
                                    </td>
                                    <td>
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
                                    </td>
                                    <td>
                                        <p className='flex'>{timeSinceWithoutAbout(booking?.updatedAt)}</p>
                                    </td>
                                    <td>
                                        <p className='flex justify-between'>
                                            {format(new Date(booking.startDate), "MMM dd, yyyy")} <span className='px-2 inline-block'>-</span>
                                            {format(new Date(booking.endDate), "MMM dd, yyyy")}
                                        </p>

                                    </td>
                                    <td>
                                        <div className=' font-semibold relative flex justify-end mr-5' >
                                            <p className='text-left absolute left-3'>$ {booking.price}</p>
                                            <button onClick={() => router.push(`/dashboard/user/booking-details/${booking?._id}`)}>
                                                <button className=' sm:text-left text-right md:text-sm text-xs'>
                                                    <span
                                                        className={'bg-primary-50 border-accent border text-white-50 px-2 py-1 rounded-md'}
                                                    >
                                                        Details
                                                    </span>
                                                </button>
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-left absolute left-3'>$ {booking.price}</p>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
};

export default Bookings;