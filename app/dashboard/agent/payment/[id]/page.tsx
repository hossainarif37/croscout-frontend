"use client"
import { useParams } from 'next/navigation';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import toast from 'react-hot-toast';

type Inputs = {
    agentPaypalEmail: string
    paymentInstruction: string
}
const page = () => {

    const { register, handleSubmit, watch, formState: { errors }, } = useForm<Inputs>();
    const { id } = useParams();
    console.log(id);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {


        const postData = {
            agentPaypalEmail: data.agentPaypalEmail,
            paymentInstruction: data.paymentInstruction,
            bookingId: id
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/bookings/${id}/payment-details`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
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
        <div className='min-h-screen lg:mt-32'>
            <form onSubmit={handleSubmit(onSubmit)} className="rounded-lg bg-card text-card-foreground shadow-sm w-full max-w-2xl lg:p-5 bg-primary-50 text-secondary-50 mx-auto">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">Payment Details</h3>
                    <p className="text-sm text-muted-foreground">Enter your payment information.To send the client.</p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="flex w-full rounded-md border-none outline-none bg-[#2E374A] px-3 py-3 text-sm lg:text-base placeholder:text-secondary-50 placeholder:text-sm;"
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                            {...register("agentPaypalEmail", { required: true })}
                        />
                        {errors?.agentPaypalEmail && <p className="text-red-600 mt-1 lg:text-base text-sm">Email is required!</p>}
                    </div>
                    <div className="space-y-2">
                        <label
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="description"
                        >
                            Description
                        </label>
                        <textarea
                            rows={4}
                            className="h-10 bg-[#2E374A] resize-none lg:text-base placeholder:text-secondary-50 placeholder:text-sm flex w-full rounded-md border-none outline-none px-3 py-2 text-sm min-h-[100px]"
                            id="description"
                            placeholder="Payment Instruction"
                            {...register("paymentInstruction", { required: true })}
                        ></textarea>
                        {errors?.paymentInstruction && <p className="text-red-600 mt-1 lg:text-base text-sm">Descriptoin is required!</p>}
                    </div>
                </div>
                <div className="flex items-center justify-end p-6 w-full">
                    <button
                        className="rounded-md border-none outline-none bg-[#2E374A] px-3 py-3 text-sm lg:text-base placeholder:text-secondary-50 placeholder:text-sm"
                        type="submit"
                    >
                        Send Payment Requirement
                    </button>
                </div>
            </form>
        </div>
    );
};

export default page;