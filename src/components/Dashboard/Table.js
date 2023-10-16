import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { BsArchive } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const Table = () => {
  return (
    <section className="mx-auto py-[0.7rem] flex rounded-md">
      <table className="border-2 rounded-md border-[#E6E7EC]  border-collapse tables mx-auto w-[78vw] h-[20rem] p-5">
        <thead className="rounded-md">
          <tr className="w-[7rem] h-[3.5rem]">
            <th className="text-start w-[22vw] px-7 text-[#828282] text-[0.75rem] font-medium">
              Name
            </th>
            <th className="text-start w-[18vw] text-[#828282] text-[0.75rem] font-medium">
              Creation Date
            </th>
            <th className="text-start w-[11vw] text-[#828282] text-[0.75rem] font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-[7rem]  h-[3.5rem] text-center">
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[22vw] px-7">
              Gotham Asylum
            </td>
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[18vw]">
              10th Aug, 2023
            </td>
            <td className="font-medium text-start w-[11vw]">
              <button className="text-[#32D583] bg-[#32D583] bg-opacity-30 rounded-md text-[0.625rem] px-4 py-2">
                Paused
              </button>
            </td>
            <td className="w-[5vw]">
              <SlOptionsVertical />
            </td>
          </tr>
          <tr className="text-center w-[7rem] border-2 border-b-[#E6E7EC] h-[3.5rem]">
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[22vw] px-7">
              Gotham Asylum
            </td>
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[18vw]">
              10th Aug, 2023
            </td>
            <td className="text-start font-medium w-[11vw]">
              <button className="bg-[#E0E0E0] text-white bg-opacity-30 rounded-md text-[0.625rem] px-4 py-2">
                Archived
              </button>
            </td>
            <td className="w-[5vw]">
              <SlOptionsVertical />
            </td>
          </tr>
          <tr className="border-2 border-b-[#E6E7EC] text-center w-[7rem] h-[3.5rem]">
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[22vw] px-7">
              Gotham Asylum
            </td>
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[18vw]">
              10th Aug, 2023
            </td>
            <td className="rounded-lg  text-start w-[13vw] font-medium">
              <button className="bg-[#32D583] text-[#32D583] bg-opacity-30 rounded-md text-[0.625rem] px-4 py-2">
                Paused
              </button>
            </td>
            <td className="w-[5vw]">
              <SlOptionsVertical />
            </td>
          </tr>
          <tr className="border-2 border-b-[#E6E7EC] text-start w-[7rem] h-[3.5rem]">
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[25vw] px-7">
              Gotham Asylum
            </td>
            <td className="text-[#34373F] text-[0.75rem] font-normal text-start w-[18vw]">
              10th Aug, 2023
            </td>
            <td className="text-white  w-[11vw] text-start font-medium relative inline-block">
              <button
                id="hoverButton"
                className="bg-[#E0E0E0] mt-3 bg-opacity-30  rounded-md text-[0.625rem] px-4 py-2"
              >
                Archived
              </button>
              <div
                id="hiddenContent"
                class="hidden absolute left-8 mt-3 p-4 space-y-2 border w-[11rem] h-[6rem] shadow-xl m-auto"
              >
                <p className="flex gap-[0.7rem] text-[#34373F] text-[0.687rem] font-normal">
                  <AiFillEye className="w-[0.8rem] h-[0.8rem]" />
                  View Transformation
                </p>
                <p className="flex gap-[0.7rem] text-[#34373F] text-[0.687rem] font-normal">
                  <BsArchive className="w-[0.8rem] h-[0.8rem]" /> Archive
                  Transformation
                </p>
                <p className="flex gap-[0.7rem] text-[#AF202D] text-[0.687rem] font-normal">
                  <MdDeleteOutline className="text-[#AF202D] w-[1rem] h-[1rem]" />{" "}
                  Delete
                </p>
              </div>
            </td>
            <td className="w-[5vw]">
              <SlOptionsVertical />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="flex h-[20rem] rounded-md">
            <td className="flex justify-end items-end gap-[0.8rem] p-[1rem]">
              <button className="px-3 py-2 rounded-md text-[0.75rem] text-white bg-[#32D583] ">
                5
              </button>
              <button className="px-3 py-2 rounded-md hover:bg-[#32D583] bg-[#E0E0E0] text-[0.75rem] text-[#828282] ">
                10
              </button>
              <button className="px-3 py-2 rounded-md hover:bg-[#32D583] bg-[#E0E0E0] text-[0.75rem] text-[#828282] ">
                15
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </section>
  );
};

export default Table;
