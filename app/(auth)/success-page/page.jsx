import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import Link from "next/link";

export default function SuccessPage({searchParams}) {

    const msg = searchParams.msg;

    return (
        <div className="flex items-center justify-center min-h-screen px-5 sm:px-0 border bg-white">
            <div className="w-full max-w-md space-y-6">
                {/* Welcome Text */}
                <div className="space-y-6">

                    <div className="w-full flex justify-center">
                        <Image src="/success.svg" alt="Success" width={300} height={300} />
                    </div>

                    <h1 className="text-2xl font-semibold text-gray-900">
                        {msg ? msg : "Account Created Successfully!"}
                    </h1>
                    <p className="text-md text-gray-600">
                        Your account is set up! Just verify your email to get started.
                    </p>

                    <Link href="/">
                        <button
                            className="w-full rounded-md bg-green-600 py-2 cursor-pointer text-white font-medium hover:bg-green-700 transition"
                        >
                            Go to Home
                        </button>
                    </Link>
                </div>

                {/* Form Component (Client) */}
            </div>
        </div>
    );
}
