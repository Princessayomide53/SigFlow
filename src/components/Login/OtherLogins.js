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
    <div className="flex flex-wrap gap-4 space-x-7 justify-center pt-[1.25rem]">
      {logins.map((item) => (
        <div key={item.id} className="flex">
          <button className="flex border-2 text-[#101828] text-[0.8125rem] font-normal leading-[1.5rem] border-[#D0D5DD] px-[0.7rem] rounded-lg py-[0.5rem]">
            {item.text}
            <span className="ml-2">
              <img src={item.img} alt="login logos" className="w-7 h-7" />
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default OtherLogins;
