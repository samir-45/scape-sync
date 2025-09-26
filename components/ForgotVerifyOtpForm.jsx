'use client';

import { useState, useRef, useEffect } from 'react';
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

// Reusable Icon components
const BackArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
);

export default function ForgotVerifyOtpForm({ email }) {
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [code, setCode] = useState(Array(6).fill(''));
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!/^[0-9]$/.test(value) && value !== '') return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        // Move to next input
        if (value !== '' && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && code[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        const verificationCode = code.join('');
        if (verificationCode.length !== 6) {
            alert('Please enter the full 6-digit code.');
            setLoading(false);
            return;
        }
        try {
            await api.post("/forgot-verify-otp", { email, otp: verificationCode });
            toast.success('Successfully verified OTP!');
            router.push("/reset-password");
        } catch (err) {
            toast.error(err.response?.data?.message || "OTP verification failed");
            // console.log(err.response?.data);
        } finally {
            setLoading(false);
        }
    };

    const handleResendCode = async () => {
        if (!email) {
            toast.error("Please enter your email first.");
            return;
        }
        setMessage("");
        setResendLoading(true);

        try {
            await api.post("/resend_otp", { email });

            toast.success("OTP resent successfully! Check your email.");
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to resend OTP");
        } finally {
            setResendLoading(false);
        }
    };


    return (
        <div>
            <form onSubmit={handleVerify}>
                {message && <p className="text-blue-500">{message}</p>}
                <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            ref={el => inputRefs.current[index] = el}
                            type="tel" // Use tel for number pads on mobile
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className="w-12 h-14  text-center text-2xl font-medium border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        />
                    ))}
                </div>

                <div className="mt-8">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 cursor-pointer"
                    >
                        {loading ? "Verifying..." : "Verify"}
                    </button>
                </div>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600">
                <p>
                    Don't have a code?{' '}
                    <button onClick={handleResendCode} disabled={resendLoading} className="font-medium text-green-600 hover:text-green-500 focus:outline-none">
                        {resendLoading ? "Resending..." : "Resend code"}
                    </button>
                </p>
            </div>
        </div>
    );
}