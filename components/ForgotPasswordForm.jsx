"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/forgot-password", { email });
      setMessage("Password reset link sent! Check your email.");
      router.push(`/forgot-verify-otp?email=${email}`);
    } catch (err) {
      setMessage(err.response?.data?.message || "Failed to send reset email");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {message && <p className="text-blue-500">{message}</p>}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="w-full rounded-md cursor-pointer bg-green-600 py-2 text-white font-medium hover:bg-green-700 transition">
          Send Reset Link
        </button>
      </form>
    </div>
  );
}
