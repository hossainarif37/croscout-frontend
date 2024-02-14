export const getFavorites = async (userId: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/favorites/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });



    const result = await response.json();

    return result;
}