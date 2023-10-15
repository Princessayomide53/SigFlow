import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Content = () => {
  return (
    <section className="flex gap-[1rem]">
      <Sidebar />
      <Main />
    </section>
  );
};

export default Content;
