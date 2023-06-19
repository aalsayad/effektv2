import React from "react";
import EffektLogo from "./EffektLogo";
import { Bars2Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <div className="border-b-[1px] border-[#ffffff20] h-[70px] bg-[#00000020] flex items-center justify-center">
      <div className="container">
        <div className="flex items-center">
          <div className="mr-4 h-8 w-8 flex rounded-md items-center justify-center border-[1px] border-[#ffffff10] cursor-pointer transition duration-200 ease-out hover:border-[#ffffff20] hover:bg-[#ffffff05]">
            <Bars2Icon className="h-5 w-5 rounded-lg " />
          </div>
          <EffektLogo width="85px" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
