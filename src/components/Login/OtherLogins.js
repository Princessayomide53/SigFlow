import React from "react";
import github from "../../asset/github.png";
import google from "../../asset/google.png";
import key from "../../asset/key.png";

const logins = [
  {
    id: 1,
    text: "Sign in with Github",
    img: github,
  },
  {
    id: 2,
    text: "Sign in with Google",
    img: google,
  },
  {
    id: 3,
    text: "Sign in with SSO",
    img: key,
  },
];
const OtherLogins = () => {
  return (
    <div className="flex flex-wrap md:gap-4 gap-[7px] space-x-7 justify-center pt-[1.25rem]">
      {logins.map((item) => (
        <div key={item.id} className="flex">
          <button className="flex border-2 text-[#101828] sm:text-[0.8125rem] text-[0.5rem] font-normal leading-[1.5rem] border-[#D0D5DD] px-[0.5rem] sm:px-[0.7rem] rounded-lg py-[0.5rem]">
            {item.text}
            <span className="sm:ml-2 ml-1">
              <img
                src={item.img}
                alt="login logos"
                className="sm:w-7 sm:h-7 w-2 h-2 mt-[8px] sm:mt-0"
              />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default OtherLogins;
