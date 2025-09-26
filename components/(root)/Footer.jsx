// components/Footer.tsx
import Image from "next/image";
import {
    FaYoutube,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx"; // for the "X" (Twitter/X)

export default function Footer() {
    return (
        <footer className="relative bg-[#0E4032] text-white pt-12 pb-2 px-6 sm:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10">
                {/* Left Section */}
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <Image
                            src="/Logo-2.svg" // place your logo in /public
                            alt="ScapeSync Logo"
                            width={180}
                            height={180}
                        />
                    </div>
                    <p className="text-gray-300 text-sm max-w-md">
                        Your all-in-one platform for job scheduling, employee
                        management, and client service built to keep your
                        business running smoothly from anywhere.
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 mt-6 text-xl">
                        <a href="#" className="hover:text-green-400">
                            <FaYoutube />
                        </a>
                        <a href="#" className="hover:text-green-400">
                            <RxCross2 />
                        </a>
                        <a href="#" className="hover:text-green-400">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-green-400">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Right Section - App Buttons */}
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
