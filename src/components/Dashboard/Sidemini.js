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
      {lists.map((list) => (
        <div
          key={list.id}
          className={`${
            lists.index === 4
              ? "bg-[#32D583] text-[#32D583]"
              : "flex gap-[0.75rem] mx-7 hover:text-[#32D583] "
          }  `}
        >
          <img src={list.img} alt="" className="w-[1.25rem] h-[1.25rem]" />
          <p className="text-[#828282] text-[0.875rem] font-medium">
            {list.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidemini;
