"use client"
import Loading from '@/components/ui/Loading/Loading';
import { getPaymentDetailsById } from '@/lib/database/getPaymentDetails';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { RiMessage2Fill } from 'react-icons/ri';

export interface IPaymentData {
    agentPaypalEmail: string,
    paymentInstruction: string
    property?: {
        name: string; // Assuming 'name' is a string, adjust the type as needed
    };
}


const page = () => {
    const [paymentDetails, setPaymentDetails] = useState<IPaymentData>();
    const [isLoading, setIsLoading] = useState(false);
    console.log(paymentDetails);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            if (typeof id === 'string') {
                setIsLoading(true)
                const paymentDetails = await getPaymentDetailsById(id);
                setPaymentDetails(paymentDetails?.booking);
                setIsLoading(false)
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='min-h-screen lg:mt-24 mt-14'>
            {paymentDetails && paymentDetails.agentPaypalEmail && paymentDetails.paymentInstruction ? (
                <div className='border border-gray-600 lg:p-16 p-4 max-w-2xl bg-primary-50 rounded-md mx-auto text-secondary-50 space-y-5'>
                    <h2 className='lg:text-8xl text-3xl text-center mx-auto text-red-500'><RiMessage2Fill /></h2>
                    <div className='border-b border-gray-600 pb-2'>
                        <h2 className='text-xl font-semibold mb-2'>Email</h2>
                        <p className='text-blue-500 underline'>{paymentDetails.agentPaypalEmail}</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold mb-2'>Payment Information</h2>
                        <p>{paymentDetails.paymentInstruction}</p>
                    </div>
                </div>
            ) : (
                <div className='lg:text-3xl text-xl text-center max-w-5xl text-white mx-auto leading-10'>
                    {`You have a pending booking request for ${paymentDetails?.property?.name} . Please note that our agent is currently reviewing your request. Kindly await further confirmation`}
                </div>
            )}
        </div>
    );
};

export default page;