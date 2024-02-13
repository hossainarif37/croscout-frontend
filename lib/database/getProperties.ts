import { id } from "date-fns/locale";

export const getPropertiesByUser = async ({ email }: { email: string | undefined }) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/properties/user/${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    const responseData = await response.json();
    return responseData;
}

export const getAllProperty = async (searchKey: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/properties${searchKey}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const { properties } = await response.json();
    return properties;
}

export const getPropertyById = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/properties/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json();
    return result;
}
