import React from "react";
import link from "../../asset/link.png";
import file from "../../asset/file.png";
import share from "../../asset/share.png";
import transform from "../../asset/transform.png";

const lists = [
  {
    id: 1,
    img: file,
    text: "Events",
  },
  {
    id: 2,
    img: link,
    text: "Pipeline",
  },
  {
    id: 3,
    img: share,
    text: "Source",
  },
  {
    id: 4,
    img: share,
    text: "Destination",
  },
  {
    id: 5,
    img: transform,
    text: "Transformations",
  },
];
const Sidemini = () => {
  return (
    <div className="space-y-7 pb-5 ">
      <div className="hover:bg-[#ECFDF3] px-2 hover:bg-opacity-10 hover:text-[#32D583] flex gap-[0.75rem] mx-6">
        <img src={file} alt="" className="w-[1.25rem] h-[1.25rem]" />
        <p className="text-[#828282] text-[0.875rem] font-medium">Events</p>
      </div>
      <div className="bg-[#ECFDF3] px-2 bg-opacity-10 text-[#32D583] flex gap-[0.75rem] mx-6">
        <img src={link} alt="" className="w-[1.25rem] h-[1.25rem]" />
        <p className="text-[#828282] text-[0.875rem] font-medium">Pipeline</p>
      </div>
      <div className="bg-[#ECFDF3] px-2 bg-opacity-10 text-[#32D583] flex gap-[0.75rem] mx-6">
        <img src={share} alt="" className="w-[1.25rem] h-[1.25rem]" />
        <p className="text-[#828282] text-[0.875rem] font-medium">Source</p>
      </div>
      <div className="bg-[#ECFDF3] px-2 rounded-md py-1 bg-opacity-10 text-[#32D583] flex gap-[0.75rem] mx-6">
        <img src={share} alt="" className="w-[1.25rem] h-[1.25rem]" />
        <p className="text-[#828282] text-[0.875rem] font-medium">
          Destination
        </p>
      </div>
      <div className="bg-[#32D583] px-2 rounded-md py-1 bg-opacity-10 text-[#32D583] flex gap-[0.75rem] mx-6">
        <img src={transform} alt="" className="w-[1.25rem] h-[1.25rem]" />
        <p className="text-[#828282] text-[0.875rem] font-medium">
          Transformation
        </p>
      </div>
    </div>
  );
};

export default Sidemini;
