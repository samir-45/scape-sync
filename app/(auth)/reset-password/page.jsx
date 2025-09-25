import BackArrowIcon from "@/components/BackArrowIcon";
import BackBtn from "@/components/BackBtn";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";
import ResetPasswordForm from "@/components/ResetPasswordForm";
import VerifyOtpForm from "@/components/VerifyOtpForm";
import Link from "next/link";


export default function ResetPassword() {


  // console.log("Email from query params:", email);

  return (
    <div className="bg-white font-sans text-gray-900">
      <div className="min-h-screen flex flex-col items-center justify-center py-12">
        <main className="w-full p-3 max-w-md ">

          <BackBtn></BackBtn>


          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Reset your password?</h1>
            <p className="text-gray-500 mt-3 text-md">
              Please enter the new password and Token that we sent to email address associated with your account.
            </p>
          </div>

          <ResetPasswordForm></ResetPasswordForm>

        </main>
      </div>
    </div>
  );
}
