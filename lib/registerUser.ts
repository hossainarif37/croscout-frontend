interface RegistrationData {
    name: string;
    email: string;
    password: string;
    taxNumber?: string;
}

export const registerUser = async ({ data }: { data: RegistrationData }) => {
    const response = await fetch('https://airbnb-clone-server-eta.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
}