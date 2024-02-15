interface IManageBookingStatus {
    id: string;
    action: string;
}

export const manageBookingStatus = async (data: IManageBookingStatus) => {
    const action = data.action
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookings/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action }),
    });
    const res = await response.json();
    return res;
}