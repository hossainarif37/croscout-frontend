import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';

const page = () => {
    const data = [
        {
            id: 1,
            name: {
                first: 'John',
                last: 'Smith',
            },
            total: 2795.95,
            status: 'On Hold',
            method: 'PayPal',
            date: '15 Minutes ago',
        },
        {
            id: 2,
            name: {
                first: 'Chris',
                last: 'Adams',
            },
            total: 1195.95,
            status: 'Processing',
            method: 'PayPal',
            date: '23 Minutes ago',
        },
        {
            id: 3,
            name: {
                first: 'Sarah',
                last: 'Smith',
            },
            total: 495.85,
            status: 'Completed',
            method: 'Visa',
            date: '1 Hour ago',
        },
        {
            id: 4,
            name: {
                first: 'Joseph',
                last: 'Choo',
            },
            total: 150.45,
            status: 'Processing',
            method: 'MasterCard',
            date: '1 Hour ago',
        },
        {
            id: 5,
            name: {
                first: 'Steve',
                last: 'Harding',
            },
            total: 175.25,
            status: 'On Hold',
            method: 'PayPal',
            date: '2 Hour ago',
        },
        {
            id: 6,
            name: {
                first: 'Laura',
                last: 'Croft',
            },
            total: 1295.75,
            status: 'Completed',
            method: 'Check',
            date: '3 Hour ago',
        },
        {
            id: 7,
            name: {
                first: 'Michael',
                last: 'Jones',
            },
            total: 89.95,
            status: 'Completed',
            method: 'MasterCard',
            date: '3 Hour ago',
        },
        {
            id: 8,
            name: {
                first: 'James',
                last: 'Bond',
            },
            total: 689.45,
            status: 'Completed',
            method: 'Visa',
            date: '7 Hour ago',
        },
        {
            id: 9,
            name: {
                first: 'Haley',
                last: 'Whiting',
            },
            total: 14.99,
            status: 'Completed',
            method: 'PayPal',
            date: '1 Day ago',
        },
        {
            id: 10,
            name: {
                first: 'Tim',
                last: 'Thomas',
            },
            total: 218.99,
            status: 'Completed',
            method: 'MasterCard',
            date: '1 Day ago',
        },
    ];
    return (
        <div className='bg-primary-50 text-secondary-50 min-h-screen'>
            <div className='flex justify-between p-4'>
                <h2>Customers</h2>
                <h2>Welcome Back, Clint</h2>
            </div>
            <div className='p-4'>
                <div className='w-full m-auto p-4 rounded-lg  overflow-y-auto'>
                    <div className='my-3 bg-[#2E374A] p-5 rounded-t-xl grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                        <span>Name</span>
                        <span className='sm:text-left text-right'>Email</span>
                        <span className='hidden md:grid'>Last Order</span>
                        <span className='hidden sm:grid'>Method</span>
                    </div>
                    <ul>
                        {data.map((order, id) => (
                            <li key={id} className=' text-secondary-50 hover:bg-[#2E374A] hover:duration-75 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
                                <div className='flex items-center'>
                                    <div className='bg-purple-100 p-3 rounded-lg'>
                                        <BsPersonFill className='text-purple-800' />
                                    </div>
                                    <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                                </div>
                                <p className='sm:text-left text-right'>{order.name.first}@gmail.com</p>
                                <p className='hidden md:flex'>{order.date}</p>
                                <div className='sm:flex hidden justify-between items-center'>
                                    <p>{order.method}</p>
                                    <BsThreeDotsVertical />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default page;