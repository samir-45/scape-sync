import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:pl-12 lg:pl-16 py-12 gap-10">
            {/* Text */}
            <div className="relative flex flex-col items-center md:items-start text-center md:text-left w-full">
                {/* Background SVG (leaf) */}
                <div className="absolute -top-4 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 opacity-20">
                    <Image
                        src="/vector-1.png"
                        alt="leaf background"
                        width={150}
                        height={150}
                        className="w-32 sm:w-40 lg:w-48 h-auto"
                    />
                </div>

                <div className="relative z-10 mt-10 sm:mt-16">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                        All Your Jobs <br />
                        <span className="relative inline-block">
                            One Smart App
                            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[200px] sm:w-[280px] lg:w-[400px]">
                                <Image
                                    src="/vector-2.png"
                                    alt="underline vector"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto"
                                />
                            </span>
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-600 text-sm sm:text-base lg:text-lg max-w-xl">
                        Built for business owners, employees, and clients streamline job
                        scheduling, service tracking, and team management in one powerful app.
                    </p>

                    {/* App Store buttons */}
                    <div className="mt-8 flex flex-row justify-center md:justify-start items-center gap-4">
                        <a
                            href="#"
                            className="flex items-center gap-2 border border-[#ABDAA9] px-3 py-2 rounded-lg  "
                        >
                            <Image
                                src="/Apple.svg"
                                alt="Download on the App Store"
                                width={25}
                                height={25}
                            />
                            <div className="text-left">
                                <p className="text-[12px] font-thin">Download on the</p>
                                <p className="font-bold text-lg sm:text-xl">App Store</p>
                            </div>
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 border border-[#ABDAA9] px-3 py-2 rounded-lg  "
                        >
                            <Image
                                src="/Playstore.svg"
                                alt="Download on Google Play"
                                width={25}
                                height={25}
                            />
                            <div className="text-left">
                                <p className="text-[12px] font-thin">Download on the</p>
                                <p className="font-bold text-lg sm:text-xl">Google Play</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Image */}
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                <Image
                    src="/phone+hand.svg"
                    alt="Hero Image"
                    width={600}
                    height={600}
                    priority
                    className="w-full h-auto"
                />
                {/* Gradient fade overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
            </div>
        </div>

    )
}
