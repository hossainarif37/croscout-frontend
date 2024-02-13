export const getAllBookings = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookings`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const { bookings } = await response.json();
    return bookings;
}