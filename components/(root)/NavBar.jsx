"use client"
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image'
import React from 'react'

export default function NavBar() {

    const { user, logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        router.push("/login");
    };

    return (
        <div className='flex justify-between items-center py-4 max-w-11/12 mx-auto'>
            <div>
                <Image
                    src="/Logo.svg"
                    alt="Logo"
                    width={130}
                    height={50}
                    className='hidden sm:block'
                    priority
                />
                                <Image
                    src="/Logo.svg"
                    alt="Logo"
                    width={100}
                    height={50}
                    className='sm:hidden'
                    priority
                />
            </div>
            <div>
                {user ? <>
                    <div className='flex items-center gap-1 sm:gap-2'>
                        <div className="border px-1 sm:px-3 rounded-lg text-[12px] sm:text-sm font-semibold border-dashed border-green-600">
                            <p>
                                <strong></strong> {user?.data.first_name} {user?.data.last_name}
                            </p>
                            <p>
                                <strong></strong> {user?.data.email}
                            </p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="rounded-md bg-[#3BA334] py-2 px-6 text-white font-medium hover:bg-green-700 transition"
                        >
                            Logout
                        </button>
                    </div>
                </> : <>
                    <button
                        className="rounded-md bg-[#3BA334] py-2 px-6 text-white font-medium hover:bg-green-700 transition"
                    >
                        Get Started
                    </button>
                </>}

            </div>
        </div>
    )
}
