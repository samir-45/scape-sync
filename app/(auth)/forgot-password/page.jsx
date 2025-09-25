import BackArrowIcon from "@/components/BackArrowIcon";
import BackBtn from "@/components/BackBtn";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import VerifyOtpForm from "@/components/VerifyOtpForm";
import Link from "next/link";


export default function VerifyOtpPage({ searchParams }) {

  const email = searchParams.email;


  // console.log("Email from query params:", email);

  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="min-h-screen flex flex-col items-center justify-center py-12">
        <main className="w-full p-3 max-w-md ">

          <BackBtn></BackBtn>


          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Forgot your password?</h1>
            <p className="text-gray-500 mt-3 text-md">
              Please enter the email address associated with your account, and we'll email you a link to reset your password.
            </p>
          </div>

          <ForgotPasswordForm></ForgotPasswordForm>

        </main>
      </div>
    </div>
  );
}
