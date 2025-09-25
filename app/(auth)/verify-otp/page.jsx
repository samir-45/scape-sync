import BackArrowIcon from "@/components/BackArrowIcon";
import VerifyOtpForm from "@/components/VerifyOtpForm";
import Link from "next/link";


export default function VerifyOtpPage({searchParams}) {

    const email = searchParams.email;

    // console.log("Email from query params:", email);

    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="min-h-screen flex flex-col items-center justify-center py-12">
                <main className="w-full p-3 max-w-md">
                    <Link href="/register" className="mb-4 inline-flex items-center text-green-600 hover:text-green-800 transition-colors">
                        <BackArrowIcon />
                        <span className="ml-2 font-medium">Back</span>
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Please check your email!</h1>
                        <p className="text-gray-500 mt-3 text-md">
                            We've emailed a 6-digit confirmation code to <span className="font-medium text-gray-700">{email}</span>, please enter the code in below box to verify your email.
                        </p>
                    </div>

                    <VerifyOtpForm email={email}></VerifyOtpForm>

                </main>
            </div>
        </div>
    );
}
