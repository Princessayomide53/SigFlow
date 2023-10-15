import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Content = () => {
  return (
    <section className="flex gap-[0.5rem]">
      <Sidebar />
      <Main />
    </section>
  );
};

export default Content;
