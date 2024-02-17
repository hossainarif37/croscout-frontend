"use client"
import { useAuthContext } from '@/providers/AuthProvider';
import BookingsTable from '../../components/BookingsTable/BookingsTable';
import { useEffect, useState } from 'react';
import { getBookingsById } from '@/lib/database/getUserBooking';
import Loading from '@/components/ui/Loading/Loading';

const page = () => {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useAuthContext();
    const userId = (user?._id);

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
    }, [userId]);

    if (isLoading) {
        return <Loading />
    }

    if (!bookings || bookings.length === 0) {
        return <div className='min-h-screen flex-center'>
            <h1 className='text-4xl font-bold text-white-50'>No bookings found. Please book a property.</h1>
        </div>
    }



    return (
        <div className='min-h-screen'>
            {/* <Bookings /> */}
            <BookingsTable setBookings={setBookings} data={bookings} tableFor='user' />
        </div>
    );
};

export default page;