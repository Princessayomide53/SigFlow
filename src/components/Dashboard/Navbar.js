import React from "react";
import Logo from "../Login/Logo";

const Navbar = () => {
  return (
    <div className="flex justify-end px-20 space-x-3 py-2 border-[#E6E7EC] border-b-2 ">
      <button className="px-4 py-3 bg-[#32D583] font-bold text-white rounded-md">
        S
      </button>
      <p className="text-[#101828] text-[0.875rem] leading-[1.25rem] font-bold">
        Sigflow <br />
        <span className="text-[#828282] text-[0.875rem] leading-[1.25rem] font-normal">
          Adeoluwa Siyabade
        </span>
      </p>
    </div>
  );
};

export default Navbar;
