
export const getAllTrasaction = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/transactions`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json();
    return result;
}

export const getTransactionById = async (id: string) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/transactions/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const result = await response.json();
    return result;
}