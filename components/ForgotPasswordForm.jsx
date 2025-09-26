"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/forgot-password", { email });
      toast.success('Successfully sent password reset link!')
      router.push(`/forgot-verify-otp?email=${email}`);
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send reset email")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
        disabled={loading}
        className="w-full rounded-md cursor-pointer bg-green-600 py-2 text-white font-medium hover:bg-green-700 transition">
          {loading ? "Sending Reset Link..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
