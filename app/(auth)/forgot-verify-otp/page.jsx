"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function ForgotVerifyOtpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      // form-data because Postman shows form-data
      const fd = new FormData();
      fd.append("email", email);
      fd.append("otp", otp);

      const res = await api.post("/forgot-verify-otp", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("OTP verified successfully. You can now reset your password.");

      // If the API returns a token, store it in localStorage/temp
      if (res.data?.token) {
        localStorage.setItem("reset_token", res.data.token);
      }

      // redirect user to reset-password page
      router.push("/reset-password");
    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-xl w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Verify OTP</h1>

        {message && <p className="text-green-600 text-sm">{message}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div>
          <label className="block text-sm">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm">OTP</label>
          <input
            type="text"
            value={otp}
            placeholder="Enter OTP"
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>
    </div>
  );
}
