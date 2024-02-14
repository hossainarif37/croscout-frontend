
export const getAllUsers = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/all-users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const jsonResponse = await response.json();
    console.log('Raw JSON response:', jsonResponse);
    const users = jsonResponse;
    return users;
};