import React from "react";
import MiniMain from "./MiniMain";

const Main = () => {
  return (
    <section className="p-[2rem] max-w-[73rem] w-[73rem]">
      <MiniMain />
      <article className="">
        <table className="border-2 border-[#E6E7EC] m-auto w-[69.2rem]">
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
          </tr>
          <tr className="w-full">
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
            <td>Row 1, Cell 3</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
            <td>Row 2, Cell 3</td>
          </tr>
        </table>
      </article>
    </section>
  );
};

export default Main;
