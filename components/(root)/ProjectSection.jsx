import Image from 'next/image';
import React from 'react'

export default function ProjectSection() {
    return (
        <section className="relative py-20 px-6 sm:px-12 lg:px-16 bg-white">

            {/* Arrows */}
            <div>
                <img className='absolute hidden lg:block top-40 left-1/6 transform -translate-x-1/2' src="/arrow - 2.svg" alt="" />
                <img className='absolute hidden lg:block top-40 left-2/4 w-1/4 transform -translate-x-1/2' src="/arrow - 3.svg" alt="" />
                <img className='absolute hidden lg:block top-40 left-7/8 w-1/5 transform -translate-x-1/2' src="/arrow - 4.svg" alt="" />
            </div>

            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Build for
                    <span className="relative inline-block">
                        Everyone
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[200px] sm:w-[280px] lg:w-[400px]">
                            <Image
                                src="/arrow - 1.svg"
                                alt="underline vector"
                                width={200}
                                height={200}
                            />
                        </span>
                    </span>
                </h2>
                <p className="mt-4 text-gray-600 sm:px-5">
                    Whether you’re booking services, managing tasks, or running operations,
                    we’ve designed the perfect experience for you.
                </p>
            </div>

            <div className="space-y-20">
                {/* Feature 1: Users */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <span className="inline-block border-[1.5px] border-[#3BA334] text-[#3BA334] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                            Users
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                            Book services, track progress and stay updated
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Easily schedule appointments, get real-time updates, and enjoy a
                            smooth, transparent service experience.
                        </p>
                        <ul className="space-y-3 text-left">
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold">|</span> Book services in seconds
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold opacity-50">|</span> Track real-time job updates
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold opacity-20">|</span> Schedule appointments at your convenience
                            </li>
                        </ul>
                    </div>
                    {/* Image */}
                    <div className="flex-1 relative flex justify-center">
                        <Image
                            src="/mobile-1.svg"
                            alt="User phone mockup"
                            width={500}
                            height={600}
                            className="w-[260px] sm:w-[500px] h-auto"
                        />
                        {/* Gradient fade overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                    </div>
                </div>

                {/* Feature 2: Business Owners */}
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                    {/* Image */}
                    <div className="flex-1 relative flex justify-center">
                        <Image
                            src="/mobile-2.svg"
                            alt="Business owners phone mockup"
                            width={500}
                            height={600}
                            className="w-[260px] sm:w-[500px] h-auto"
                        />
                        {/* Gradient fade overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                    </div>
                    {/* Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <span className="inline-block border-[1.5px] border-[#3BA334] text-[#3BA334] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                            Business Owners
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                            Assign jobs, monitor performance, and streamline operations.
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Gain full control of your workforce with real-time tracking,
                            smart scheduling, and service management in one app.
                        </p>
                        <ul className="space-y-3 text-left">
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold">|</span> Assign jobs to the right team member
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold opacity-50">|</span> Monitor performance in real time
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold opacity-20">|</span> Manage clients and services seamlessly
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Feature 3: Employees */}
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <span className="inline-block border-[1.5px] border-[#3BA334] text-[#3BA334] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                            Employees
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                            See tasks, track time, and navigate routes with ease.
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Everything you need to manage your workday from job assignments to
                            optimized routes and time logging.
                        </p>
                        <ul className="space-y-3 text-left">
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold">|</span> Assign jobs to the right team member
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold opacity-50">|</span> Monitor performance in real time
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600 font-bold opacity-20">|</span> Manage clients and services seamlessly
                            </li>
                        </ul>
                    </div>
                    {/* Image */}
                    <div className="flex-1 relative flex justify-center">
                        <Image
                            src="/mobile-3.svg"
                            alt="Employees phone mockup"
                            width={500}
                            height={600}
                            className="w-[260px] sm:w-[500px] h-auto"
                        />
                        {/* Gradient fade overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
