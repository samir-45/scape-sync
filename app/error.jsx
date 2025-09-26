"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";


export default function ErrorPage({ error, reset }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            {/* Icon */}
            <ExclamationTriangleIcon className="w-24 h-24 text-green-600 mb-6" />

            {/* Title */}
            <h1 className="text-3xl font-bold text-green-700">Something went wrong</h1>
            <p className="text-green-600 mt-2">{error?.message || "An unexpected error occurred."}</p>

            {/* button */}
            <div className="flex gap-4">
                <button
                    onClick={() => reset()}
                    className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                >
                    Try Again
                </button>
                <Link href="/">
                    <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
                        Go to Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
