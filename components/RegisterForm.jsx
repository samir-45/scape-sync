"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function RegisterForm() {
    const router = useRouter();

    // const {email} = useAuth()

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [terms, setTerms] = useState(false);

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    // simple client-side validation
    const validate = () => {
        const e = {};
        if (!firstName.trim()) e.first_name = "First name is required";
        if (!lastName.trim()) e.last_name = "Last name is required";
        if (!email.trim()) e.email = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
        if (!password) e.password = "Password is required";
        else if (password.length < 8) e.password = "Password must be at least 8 characters";
        if (password !== passwordConfirm) e.password_confirmation = "Passwords do not match";
        if (!terms) e.terms = "You must accept the terms";
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setMessage("");
        setErrors({});

        if (!validate()) return;

        setLoading(true);
        try {
            // payload as JSON
            const payload = {
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                password_confirmation: passwordConfirm,
                terms, // boolean
            };

            const res = await api.post("/register", payload);

            // success handling
            setMessage("Registration successful! Please login.");
            //   router.push("/login");
            router.push(`/verify-otp?email=${email}`);
        } catch (err) {
            const data = err?.response?.data;
            console.log(data.message)

            if (data?.message === "The email has already been taken.") {
                // Redirect to login if email is already verified
                router.push("/login");
            } else if (data?.errors && typeof data.errors === "object") {
                const backendErrors = {};
                Object.entries(data.errors).forEach(([k, v]) => {
                    backendErrors[k] = Array.isArray(v) ? v.join(" ") : String(v);
                });
                setErrors(backendErrors);
            } else {
                setMessage(data?.message || "Registration failed. Try again.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-4"
        >

            {message && <p className="text-center text-blue-600">{message}</p>}
            <div className="flex flex-col w-full sm:flex-row sm:space-x-4 space-y-5 sm:space-y-0">
                <div className="w-full">
                    <input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        placeholder="First name"
                    />
                    {errors.first_name && (
                        <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                    )}
                </div>

                <div className="w-full">
                    <input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                        placeholder="Last name"
                    />
                    {errors.last_name && (
                        <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
                    )}
                </div>
            </div>


            <div>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="user@gmail.com"
                    type="email"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            <div>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Password"
                    type="password"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
            </div>

            <div>
                <input
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                    placeholder="Confirm password"
                    type="password"
                />
                {errors.password_confirmation && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.password_confirmation}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-2">
                <input
                    id="terms"
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    className="h-4 w-4 accent-green-600"
                />
                <label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions
                </label>
            </div>
            {errors.terms && (
                <p className="text-red-500 text-sm mt-1">{errors.terms}</p>
            )}

            <button
                disabled={loading}
                type="submit"
                className="w-full py-2 rounded-lg bg-green-600 text-white disabled:opacity-60"
            >
                {loading ? "Registering..." : "Register"}
            </button>

            {/* OR Divider */}
            <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-2 text-xs text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Google Login */}
            <button className="btn bg-white text-black w-full rounded-lg border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>

            {/* Footer */}
            <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-green-600 hover:underline">
                    Login
                </Link>
            </p>
        </form>
    );
}
