"use client"
import Loading from '@/components/ui/Loading/Loading';
import { getPaymentDetailsById } from '@/lib/database/getPaymentDetails';
import { getStoredToken } from '@/utils/tokenStorage';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RiMessage2Fill } from 'react-icons/ri';

export interface IPaymentData {
    agentPaypalEmail: string,
    paymentInstruction: string
    userTransactionId: string
    property?: {
        name: string; // Assuming 'name' is a string, adjust the type as needed
    };
}

type Inputs = {
    userTransactionId: number;
}

const page = () => {
    const [paymentDetails, setPaymentDetails] = useState<IPaymentData>();
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
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

    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {

        const token = getStoredToken();
        if (!token) throw new Error('Token is required for get Favorites');

        const transactionData = {
            userTransactionId: data?.userTransactionId,
            bookingId: id,
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookings/${id}/transaction-id`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(transactionData),
        });

        const responseData = await response.json();
        if (responseData.success) {
            toast.success(responseData?.message)
        }
        else {
            toast.error(responseData?.error)
        }
    }



    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='min-h-[90vh] lg:mt-24 mt-14'>
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
                    <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-card text-card-foreground shadow-sm w-full max-w-2xl lg:p-8 p-2 py-4 lg:py-10 bg-primary-50 text-secondary-50 mx-auto">
                        <div className="p-6 flex flex-col items-center space-y-2">
                            <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Payment Confirmation</h3>
                            <p className="text-sm text-muted-foreground text-center">Enter your Transaction ID for verification.</p>
                        </div>
                        <div className="flex  gap-4 items-center ">
                            <div className=" flex-1 space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="transaction"
                                >
                                    Transaction ID
                                </label>
                                <input
                                    className="flex w-full rounded-md border-none outline-none bg-[#2E374A] px-3 py-3 text-sm lg:text-base placeholder:text-secondary-50 placeholder:text-sm"
                                    id="transaction"
                                    placeholder="Enter your transaction ID"
                                    defaultValue={paymentDetails?.userTransactionId}
                                    {...register("userTransactionId", { required: true })}
                                />
                            </div>
                            <div className='mt-8'>
                                <button
                                    className="rounded-md border-none outline-none bg-blue-600 lg:px-8 px-4 py-3 text-sm lg:text-base placeholder:text-secondary-50 placeholder:text-sm"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        {errors?.userTransactionId && <p className="text-red-600 mt-1 lg:text-base text-sm">Trasaction ID is required!</p>}
                    </form>
                </div>
            ) : (
                <div className='lg:text-3xl text-xl text-center max-w-5xl text-white mx-auto leading-10'>
                    {`You have a pending booking request for "${paymentDetails?.property?.name}" . Please note that our agent is currently reviewing your request. Kindly await further confirmation`}
                </div>
            )}
        </div>
    );
};

export default page;