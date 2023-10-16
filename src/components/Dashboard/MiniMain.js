import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const MiniMain = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h1 className="text-[#101828] text-[1.25rem] font-semibold leading-[1.75rem]">
          Transformation
        </h1>
        <div className="flex">
          <button className="text-white text-[0.875rem] font-bold bg-[#32D583] px-[0.875rem] py-[0.3rem] h-[2.25rem] rounded-md mr-[0.8rem]">
            Create a new Transformation
          </button>
          <button className="text-white text-[0.875rem] font-bold bg-[#32D583] px-[0.875rem] py-[0.3rem] h-[2.25rem] rounded-md">
            Filters
          </button>
        </div>
      </div>
      <div className="flex justify-end py-4 relative">
        <input
          type="text"
          className="px-[0.9rem] border-2 w-[18.9rem] h-[2.5rem] rounded-md border-[#E6E7EC] py-[0.62rem]"
          placeholder="Search transformation"
        />

        <div className="absolute right-6 top-7">
          <AiOutlineSearch className="text-[#32D583] text-xl" />
        </div>
      </div>
    </section>
  );
};

export default MiniMain;
