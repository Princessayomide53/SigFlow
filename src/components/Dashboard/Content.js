import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const Content = () => {
  return (
    <section className="flex space-[1rem] rounded-md">
      <Sidebar />
      <Main />
    </section>
  );
};

export default Content;
