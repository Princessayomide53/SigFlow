import React from "react";
import MiniMain from "./MiniMain";

import "../../App.css";
import Table from "./Table";

const Main = () => {
  return (
    <section className="p-[2rem] max-w-[78rem] w-[78vw] mx-auto m-0">
      <MiniMain />
      {/* <article className="mx-auto py-[0.7rem] flex rounded-md"> */}
      <Table />
      {/* </article> */}
    </section>
  );
};

export default Main;
