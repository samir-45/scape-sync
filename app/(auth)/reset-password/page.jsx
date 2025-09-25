"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/reset-password", {
        password,
        password_confirmation: passwordConfirm,
        token,
      });
      setMessage("Password reset successful! You can login now.");
      router.push("/login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Reset failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-xl w-96 space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Reset Password</h1>
        {message && <p className="text-blue-500">{message}</p>}
        <input
          type="password"
          placeholder="New Password"
          className="w-full border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          className="w-full border p-2 rounded"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Token from email"
          className="w-full border p-2 rounded"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button className="bg-red-600 text-white w-full py-2 rounded">
          Reset Password
        </button>
      </form>
    </div>
  );
}
