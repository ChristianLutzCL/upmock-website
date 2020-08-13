import React from "react";
import Logo from "../img/logo.svg";

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-3 relative font-nunito">
      <div class="flex items-center flex-shrink-0 text-gray-500 mr-6">
        <img class="h-10 w-10 mr-2" src={Logo} alt="UpMock Logo" />
        <span class="font-bold text-2xl text-green-500 tracking-tight">
          UpMock
        </span>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto absolute right-0 pr-5">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Try for free</button>
      </div>
      </div>
    </nav>
  );
}

export default Header;
