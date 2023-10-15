import React from "react";
import Card from "../UI/Card";
import OtherLogins from "./OtherLogins";

const Login = () => {
  return (
    <section>
      <Card className="m-auto max-w-[30rem] px-[1.8rem] bg-white rounded-lg h-[33.5rem] border-2 border-[#E6E7EC] py-[1.28rem]">
        <h1 className="text-center text-[#101828] text-[1.5rem] font-normal leading-medium">
          Welcome back!
        </h1>
        <p className="text-[#828282] text-center text-[0.875rem] font-normal leading-normal">
          Sign in to access your account
        </p>
        <div className="space-y-2 pt-[1.25rem]">
          <label className="text-[#101828] block text-[0.75rem] leading-[1.25rem] font-normal">
            Email
          </label>
          <input
            type="text"
            className="border-2 border-[#E6E7EC] w-full h-[2.2rem] rounded-md"
          />
        </div>
        <div className="space-y-2 pt-[0.75rem]">
          <label className="text-[#101828] block text-[0.75rem] leading-[1.25rem] font-normal">
            Password
          </label>
          <input
            type="text"
            className="border-2 border-[#E6E7EC] w-full h-[2.2rem] rounded-md"
          />
        </div>
        <p className="text-[#32D583] text-[0.75rem] leading-[1.25rem] font-medium pt-1">
          Forgot Password?
        </p>
        <button className="text-white bg-[#32D583] mt-[2rem] rounded-lg text-[0.875rem] font-semibold leading-[1.5rem] w-full h-[2.45rem]">
          Sign In
        </button>
        <p className="text-center pt-[1.25rem]">OR</p>
        <OtherLogins />
      </Card>
      <p className="text-center pt-1 text-[#101828] text-[0.75rem] font-normal leading-9-[1.25rem]">
        Don't have an account? <span className="text-[#32D583]">Sign Up</span>
      </p>
    </section>
  );
};

export default Login;
