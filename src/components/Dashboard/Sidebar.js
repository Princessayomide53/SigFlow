import React from "react";
import Logo from "../Login/Logo";
import user from "../../asset/user.png";
import settings from "../../asset/settings.png";
import book from "../../asset/book.png";
import Sidemini from "./Sidemini";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

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
    <section className="relative max-w-[20rem] w-[15.5rem]  h-full ">
      <main className=" absolute -top-[4.9rem] left-0 z-20 bg-[#f5f5f5]">
        <Logo />

        <div className="flex">
          <button className="flex gap-[6rem] w-[11.75rem] h-[2.187rem] text-[0.825rem] mx-5 font-bold px-[0.67rem] py-[0.4rem] bg-[#18181B] bg-opacity-10 border-2 text-start rounded-[0.375rem] mb-7 my-3">
            Sigflow
            <span className="flex flex-col gap-0 text-xs -mt-[0.2rem]">
              <MdKeyboardArrowUp />
              <MdKeyboardArrowDown />
            </span>
          </button>
        </div>
        <div className="flex flex-col justify-center items-start">
          <Sidemini />
          <div className="space-y-5 border-t-2 border-[#E7E7E7] py-5 w-full">
            {users.map((user) => (
              <div
                className="flex w-[10rem] rounded-md py-[0.3rem] gap-[0.75rem] mx-7  "
                key={user.id}
              >
                <img
                  src={user.img}
                  alt=""
                  className="w-[1.25rem] h-[1.25rem]"
                />
                <p className="text-[#828282] text-[0.875rem] font-medium ">
                  {user.text}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-5 mt-[10rem] mb-[10.5rem]">
            {books.map((items) => (
              <div className="flex gap-[0.75rem] mx-7" key={items.id}>
                <img
                  src={items.img}
                  alt=""
                  className="w-[1.25rem] h-[1.25rem]"
                />
                <p className="text-[#32D583] text-[0.875rem] font-medium -mt-[0.1rem]">
                  {items.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>{" "}
    </section>
  );
};

export default Sidebar;
