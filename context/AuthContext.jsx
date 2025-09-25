"use client";

import { createContext, useContext, useState, useEffect } from "react";
import api from "@/lib/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      fetchUser();
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    fetchUser();
  };

  const logout = async () => {
    try {
      await api.post("/logout");
    } catch (err) {
      console.error(err);
    }
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  const fetchUser = async () => {
    try {
      const res = await api.get("/user-detail");
      setUser(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, fetchUser, setEmail, email }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
