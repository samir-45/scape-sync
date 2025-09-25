"use client";

import React from "react";
import { useRouter } from "next/navigation";
import BackArrowIcon from "./BackArrowIcon";

function BackBtn() {
    const router = useRouter();
    
    return (
        <button 
            onClick={() => router.back()} 
            className="mb-4 inline-flex cursor-pointer items-center text-green-600 hover:text-green-800 transition-colors"
        >
            <BackArrowIcon />
            <span className="ml-2 font-medium">Back</span>
        </button>
    );
}

export default BackBtn;