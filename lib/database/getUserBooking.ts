export const getBookingsById = async (id: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookings/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json();
    return result;
}