"use client"
import { useAuth } from "@/context/AuthContext";

export default function Home() {

  const { user, logout } = useAuth();

  console.log(user)

  const handleLogout = async () => {
    await logout();
    // router.push("/login");
  };

  return (
    <div className="bg-amber-300">
      hehe

      <button
        onClick={handleLogout}
        className="bg-gray-800 text-white cursor-pointer mt-6 px-4 py-2 rounded"
      >
        Logout
      </button>

      <h1 className="text-2xl font-bold">Dashboard</h1>
      {user ? (
        <div className="mt-4 space-y-2">
          <p>
            <strong>Name:</strong> {user?.data.first_name} {user?.data.last_name}
          </p>
          <p>
            <strong>Email:</strong> {user?.data.email}
          </p>
        </div>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}
