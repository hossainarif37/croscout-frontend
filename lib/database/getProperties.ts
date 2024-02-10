export const getPropertiesByUser = async ({ token, email }: { token: string, email: string | undefined }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/properties/user/${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    });
    const responseData = await response.json();
    return responseData;
}