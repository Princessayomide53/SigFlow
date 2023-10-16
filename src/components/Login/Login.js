import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import OtherLogins from "./OtherLogins";
import Logo from "./Logo";
import toast from "react-hot-toast";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(!hide);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (
      enteredEmail.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      toast.error("Email and Password are required.");
    } else if (
      enteredPassword.trim().length < 6 ||
      !enteredEmail.includes("@")
    ) {
      toast.error("Please enter a valid Email and Password.");
    } else {
      // Proceed with your login logic here
    }

    const details = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    props.onLogin(details);
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };
  return (
    <section>
      <Logo />
      <Card className="m-auto lg:max-w-[30rem] md:max-w-[30rem] max-w-[85vw]  px-[1.8rem] bg-white rounded-lg sm:h-[33.5rem] h-[31.7rem] border-2 border-[#E6E7EC] py-[1.28rem]">
        <h1 className="text-center text-[#101828] text-[1.5rem] font-normal leading-medium">
          Welcome back!
        </h1>
        <p className="text-[#828282] text-center text-[0.875rem] font-normal leading-normal">
          Sign in to access your account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-2 pt-[1.25rem]">
            <label className="text-[#101828] block text-[0.75rem] leading-[1.25rem] font-normal">
              Email
            </label>
            <input
              type="email"
              ref={emailInputRef}
              //   required
              className="border-2 border-[#E6E7EC] w-full h-[2.2rem] rounded-md pl-3"
            />
          </div>
          <div className="space-y-2 pt-[0.75rem] relative">
            <label className="text-[#101828] block text-[0.75rem] leading-[1.25rem] font-normal">
              Password
            </label>
            <input
              type={hide ? "text" : "password"}
              //   required
              ref={passwordInputRef}
              className="border-2 border-[#E6E7EC] w-full h-[2.2rem] rounded-md pl-3"
            />

            {hide ? (
              <AiOutlineEyeInvisible
                onClick={handleClick}
                className="absolute top-10 right-4 cursor-pointer"
              />
            ) : (
              <AiFillEye
                className="absolute top-10 right-4 cursor-pointer"
                onClick={handleClick}
              />
            )}
          </div>
          <p className="text-[#32D583] text-[0.75rem] leading-[1.25rem] font-medium pt-1">
            Forgot Password?
          </p>
          <button
            type="submit"
            className=" text-white bg-[#32D583] mt-[2rem] rounded-lg text-[0.875rem] font-semibold leading-[1.5rem] w-full h-[2.45rem]"
          >
            Sign In
          </button>
        </form>
        <p className="text-center pt-[1.25rem]">OR</p>
        <OtherLogins />
      </Card>
      <p className="text-center sm:pt-1 pt-2 text-[#101828] text-[0.75rem] font-normal leading-9-[1.25rem]">
        Don't have an account? <span className="text-[#32D583]">Sign Up</span>
      </p>
    </section>
  );
};

export default Login;
