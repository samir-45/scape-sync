import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-5 sm:px-0 border bg-white">
      <div className="w-full max-w-md space-y-6">
        {/* Welcome Text */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create your Account
          </h1>
          <p className="text-md text-gray-600">
            When sports Meets smart Tech.
          </p>
        </div>

        {/* Form Component (Client) */}
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
}
