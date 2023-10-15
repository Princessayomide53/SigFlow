import React from "react";
import MiniMain from "./MiniMain";
import { SlOptionsVertical } from "react-icons/sl";

const Main = () => {
  return (
    <section className="p-[2rem] max-w-[73rem] w-[73rem] mx-auto">
      <MiniMain />
      <article className="m-auto py-[2rem]">
        <table className="border-2 border-[#E6E7EC] mx-auto w-[69.2rem] h-[20rem] p-5">
          <tr className="  w-[7rem] h-[3rem]">
            <th className="text-start w-[25rem] px-7 text-[#828282] text-[0.75rem] font-medium">
              Name
            </th>
            <th className="text-start w-[22rem] px-7 text-[#828282] text-[0.75rem] font-medium">
              Creation Date
            </th>
            <th className="text-[#828282] text-[0.75rem] font-medium text-center w-[18rem] px-7">
              Status
            </th>
            {/* <th></th> */}
          </tr>
          <tr className="w-[7rem] h-[3rem] text-center">
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[25rem] px-7">
              Gotham Asylum
            </td>
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[22rem] px-7">
              10th Aug, 2023
            </td>
            <td className="font-medium text-center w-[18rem]">
              <button className="text-[#32D583] bg-[#32D583] bg-opacity-30 rounded-md text-[0.625rem] px-4 py-2">
                Paused
              </button>
            </td>
            <td>
              <SlOptionsVertical />
            </td>
          </tr>
          <tr className="border-2  border-[#E6E7EC] text-center w-[7rem] h-[3rem]">
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[25rem] px-7">
              Gotham Asylum
            </td>
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[22rem] px-7">
              10th Aug, 2023
            </td>
            <td className="text-center font-medium w-[18rem]">
              <button className="bg-[#E0E0E0] text-white bg-opacity-30 rounded-md text-[0.625rem] px-4 py-2">
                Archived
              </button>
            </td>
            <td>
              <SlOptionsVertical />
            </td>
          </tr>
          <tr className="border-2 border-[#E6E7EC] text-center w-[7rem] h-[3rem]">
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[25rem] px-7">
              Gotham Asylum
            </td>
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[22rem] px-7">
              10th Aug, 2023
            </td>
            <td className="rounded-lg  text-center w-[18rem] font-medium">
              <button className="bg-[#32D583] text-[#32D583] bg-opacity-30 rounded-md text-[0.625rem] px-4 py-2">
                Paused
              </button>
            </td>
            <td>
              <SlOptionsVertical />
            </td>
          </tr>
          <tr className="border-2 border-[#E6E7EC] text-center w-[7rem] h-[3rem]">
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[25rem] px-7">
              Gotham Asylum
            </td>
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[22rem] px-7">
              10th Aug, 2023
            </td>
            <td className="text-white  w-[18rem] text-center font-medium">
              <button className="bg-[#E0E0E0] bg-opacity-30 rounded-md text-[0.625rem] px-4 py-2">
                Archived
              </button>
            </td>
            <td>
              <SlOptionsVertical />
            </td>
          </tr>
        </table>
      </article>
    </section>
  );
};

export default Main;
