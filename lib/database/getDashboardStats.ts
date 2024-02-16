export const getDashboardStats = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/dashboard/stats/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const stats = await response.json();
    return stats;
}