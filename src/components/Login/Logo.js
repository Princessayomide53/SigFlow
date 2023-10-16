import React from "react";
import Sigflow from "../../asset/Sigflow.png";
// import Login from "../Login/Login";

const Logo = () => {
  return (
    <section>
      <div className="p-5 pl-6">
        <img src={Sigflow} alt="" className="w-[5rem] h-[1.5rem]" />
      </div>
      {/* <Login /> */}
    </section>
  );
};

export default Logo;
