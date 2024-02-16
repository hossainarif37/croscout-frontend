export const getBookingDetails = async (id: string) => {
    const response = fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookings/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const result = (await response).json();
    return result
}