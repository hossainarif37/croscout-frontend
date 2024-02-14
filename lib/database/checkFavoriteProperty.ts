export const checkFavoriteProperty = async ({ userId, propertyId }: any) => {
    const response = await fetch(`http://localhost:5000/api/favorites/${userId}/check-favorite?property_id=${propertyId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json();

    return result;
}