"use client"
import { useEffect, useState } from 'react';
import { useAuthContext } from '@/providers/AuthProvider';
import Loading from '@/components/ui/Loading/Loading';
import BookingsTable from '../../components/BookingsTable/BookingsTable';
import { getAllBookings } from '@/lib/database/getBookings';


const page = () => {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { user } = useAuthContext();
    const userId = (user?._id);

    useEffect(() => {
        const fetchBookings = async () => {
            // If the user ID is not available, log a message and skip fetching
            if (!userId) {
                console.log('User ID is undefined, skipping fetch');
                return;
            }
            try {
                // Set the loading state to true before fetching
                setIsLoading(true);
                // Fetch the bookings data
                const bookingsData = await getAllBookings();
                // Update the bookings state with the fetched data
                setBookings(bookingsData);
                // Set the loading state to false after fetching
                setIsLoading(false);
            } catch (error) {
                // Log any errors that occur during fetching
                console.error('Failed to fetch bookings:', error);
                // Set the loading state to false in case of an error
                setIsLoading(false);
            }
        };
        // Call the fetchBookings function to initiate the data fetching
        fetchBookings();
    }, [userId]);

    // If the data is still loading, render a loading component
    if (isLoading) {
        return <Loading />
    }
    // If there are no bookings, render a message indicating that no bookings were found
    if (!bookings || bookings.length === 0) {
        return <div className='min-h-screen flex-center'>
            <h1 className='text-4xl font-bold text-white-50'>No bookings found. Please book a property.</h1>
        </div>
    }

    // Render the BookingsTable component with the fetched bookings data
    return (
        <div>
            <BookingsTable data={bookings} setBookings={setBookings} tableFor='admin'></BookingsTable>
        </div>
    );
};

export default page;