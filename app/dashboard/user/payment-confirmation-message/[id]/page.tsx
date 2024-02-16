"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import toast from 'react-hot-toast';

type Inputs = {
    userTransactionId: number;
}
const page = () => {
    const { id } = useParams();

    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();


    const onSubmit: SubmitHandler<Inputs> = async (data) => {


        const transactionData = {
            userTransactionId: data?.userTransactionId,
            bookingId: id,
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookings/${id}/transaction-id`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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


    return (
        <div className='min-h-screen lg:mt-32 mt-20'>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-card text-card-foreground shadow-sm w-full max-w-2xl lg:p-8 p-2 py-4 lg:py-10 bg-primary-50 text-secondary-50 mx-auto">
                <div className="p-6 flex flex-col items-center space-y-2">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Payment Confirmation</h3>
                    <p className="text-sm text-muted-foreground text-center">Enter your email address and confirm your payment.</p>
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
    );
};

export default page;