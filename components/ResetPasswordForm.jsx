"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ResetPasswordForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const msg = "Password Reset Successfully";
    try {
      await api.post("/reset-password", {
        password,
        password_confirmation: passwordConfirm,
        token,
      });
      toast.success("Password reset successful! You can login now.");
      router.push(`/login?msg=${msg}`);
    } catch (err) {
      toast.error(err.response?.data?.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {message && <p className="text-blue-500">{message}</p>}
        <input
          type="password"
          placeholder="New Password"
          className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Token from email"
          className="w-full rounded-md border border-gray-300 px-3 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button disabled={loading} className="w-full rounded-md bg-green-600 py-2 text-white font-medium hover:bg-green-700 transition">
          {loading ? "Resetting Password..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
