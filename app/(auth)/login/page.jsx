import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 sm:px-0 border bg-white">
      <div className="w-full max-w-md space-y-6">
        {/* Welcome Text */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome to ScapeSync
          </h1>
          <p className="text-md text-gray-600">
            Please share your login details so you can access the website.
          </p>
        </div>

        {/* Form Component (Client) */}
        <LoginForm></LoginForm>
      </div>
      
    </div>
  );
}
