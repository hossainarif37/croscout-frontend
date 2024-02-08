interface RegistrationData {
    name: string;
    email: string;
    password: string;
    taxNumber?: string;
}

interface LoginData {
    email: string;
    password: string;
}



export const registerUser = async ({ data }: { data: RegistrationData }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
}


export const loginUser = async ({ data }: { data: LoginData }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
}


export const logoutUser = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/logout`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const responseData = await response.json();
    return responseData;
}

export const getUser = async ({ token }: { token: string }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/current-user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
    });
    const responseData = await response.json();
    return responseData;
}
