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
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/properties/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}


export const getPropertyTestimonials = async (id: string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/properties/${id}/feedbacks`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}