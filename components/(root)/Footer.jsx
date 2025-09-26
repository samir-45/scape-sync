// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import {
    FaYoutube,
    FaInstagram,
    FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className=" relative overflow-hidden bg-[#0E4032] text-white  pb-2 px-6 sm:px-12 lg:px-16">
            <img className="absolute -bottom-50 right-1/2 lg:right-1/8 opacity-40" src="/vector 2.svg" alt="" />
            <img className="absolute -right-5 -top-5 opacity-40" src="/vector 3.svg" alt="" />
            <img className="absolute -right-5 lg:-top-5 -bottom-1 lg:-bottom-0 opacity-40" src="/vector 4.png" alt="" />
            <div className="max-w-7xl relative pt-12 z-40 mx-auto flex items-start lg:items-center flex-col lg:flex-row justify-between  gap-10">
                {/* Left Section */}
                <div className="">
                    <div className="flex items-center py-0 sm:py-5  gap-3 mb-4">
                        <Image
                            src="/Logo-2.svg" // place your logo in /public
                            alt="ScapeSync Logo"
                            width={180}
                            height={180}
                        />
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 mt-6 text-xl">
                        <Link href="#" className="hover:text-green-400">
                            <FaYoutube />
                        </Link>
                        <Link href="#" className="hover:text-green-400">
                            <FaXTwitter />
                        </Link>
                        <Link href="#" className="hover:text-green-400">
                            <FaFacebook />
                        </Link>
                        <Link href="#" className="hover:text-green-400">
                            <FaInstagram />
                        </Link>
                    </div>
                </div>

                <div className=" h-full">
                    <p className="text-gray-300 text-sm max-w-md">
                        Your all-in-one platform for job scheduling, employee
                        management, and client service built to keep your
                        business running smoothly from anywhere.
                    </p>
                </div>

                {/* Right Section - App Buttons */}
                {/* App Store buttons */}
                <div className=" flex flex-row justify-center md:justify-start items-center gap-4">
                    <a
                        href="#"
                        className="flex items-center gap-2 border border-[#ABDAA9] px-3 py-2 rounded-lg  "
                    >
                        <Image
                            src="/Apple.svg"
                            alt="Download on the App Store"
                            width={25}
                            height={25}
                            className="invert"
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

            {/* Bottom Bar */}
            <div className="border-t border-green-700 mt-10 pt-4 text-center text-sm text-gray-400">
                © 2021-2025, ScapeSync. All Rights Reserved.
            </div>
        </footer>
    );
}
