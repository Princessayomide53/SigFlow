import React from "react";
import Logo from "../Login/Logo";
import user from "../../asset/user.png";
import settings from "../../asset/settings.png";
import book from "../../asset/book.png";
import Sidemini from "./Sidemini";

const users = [
  { id: 1, img: user, text: "User" },
  { id: 2, img: settings, text: "Setting" },
];
const books = [
  { id: 1, img: book, text: "Help" },
  { id: 2, img: book, text: "Documentation" },
];
const Sidebar = () => {
  return (
    <section className="max-w-[20rem] w-[15.5rem] bg-[#f5f5f5] h-screen bg-opacity-40">
      <Logo />
      <div className="flex flex-col justify-center items-start ">
        <button className="w-[11.75rem] h-[2.187rem] text-[0.825rem] mx-5 font-bold px-[0.62rem] bg-[#18181B] bg-opacity-10 border-2 text-start rounded-[0.375rem] mb-7 my-3">
          Sigflow
        </button>
        <Sidemini />
        <div className="space-y-5 border-t-2 border-[#E7E7E7] py-5 w-full">
          {users.map((user) => (
            <div className="flex gap-[0.75rem] mx-7">
              <img src={user.img} alt="" className="w-[1.25rem] h-[1.25rem]" />
              <p className="text-[#828282] text-[0.875rem] font-medium">
                {user.text}
              </p>
            </div>
          ))}
        </div>
        <div className="space-y-5 pt-[7rem]">
          {books.map((items) => (
            <div className="flex gap-[0.75rem] mx-7">
              <img src={items.img} alt="" className="w-[1.25rem] h-[1.25rem]" />
              <p className="text-[#32D583] text-[0.875rem] font-medium -mt-[0.1rem]">
                {items.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
