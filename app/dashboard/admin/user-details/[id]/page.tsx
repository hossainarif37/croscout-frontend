"use client"
import { useParams } from 'next/navigation';
import React from 'react';

const page = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div className="space-y-6 text-wrap">
            <div className="px-4 md:px-6">
                <div className="space-y-3">
                    <div className="space-y-1 text-white-50">
                        <h1 className="text-2xl font-bold">User Details</h1>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-6 text-secondary-50">
                <div className="rounded-lg border border-gray-600 bg-card text-card-foreground shadow-sm">
                    <div className="p-4 md:p-6">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">Name</dt>
                                <dd className="text-sm sm:col-start-2">John Doe</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">Email</dt>
                                <dd className="text-sm sm:col-start-2">john@example.com</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">Telephone</dt>
                                <dd className="text-sm sm:col-start-2">(123) 456-7890</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">Role</dt>
                                <dd className="text-sm sm:col-start-2">Admin</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-6">
                <div className="rounded-lg border border-gray-600 bg-card text-card-foreground shadow-sm">
                    <div className="p-4 md:p-6">
                        <h3 className="text-2xl font-semibold text-white">Address</h3>
                    </div>
                    <div className="p-4 md:p-6">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">Street</dt>
                                <dd className="text-sm sm:col-start-2 text-secondary-50">1234 Elm Street</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">House</dt>
                                <dd className="text-sm sm:col-start-2 text-secondary-50">42</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">Postcode</dt>
                                <dd className="text-sm sm:col-start-2 text-secondary-50">54321</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">City</dt>
                                <dd className="text-sm sm:col-start-2 text-secondary-50">Anytown</dd>
                            </div>
                            <div className="space-y-1">
                                <dt className="text-sm text-white-50">State</dt>
                                <dd className="text-sm text-secondary-50">CA</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;