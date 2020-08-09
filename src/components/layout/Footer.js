import React from "react";
import Logo from "../img/logo.svg";

function Footer() {
  return (
    <footer>
        <div class="bg-gray-800 pt-10 px-10 pb-10 md:flex font-nunito">
        <div class="md:w-2/5">
        <div class="pb-10 flex">
            <img class="h-10 w-10" src={Logo} alt=""/>
            <p class="self-center font-bold text-green-500 text-2xl pl-2">UpMock</p>
        </div>
        <div class="text-gray-500 font-nunito">
            <p>© 2020 by UpMock.io</p>
            <p>Made with ♥ in Bavaria</p>
            <br/>
            <p>chris@inspiredprogrammer.com</p>
        </div>
        </div>
        <div class="flex text-gray-500 pt-20 md:w-3/5 md:justify-end md:pt-0">
        <div class="pr-16">
            <p class="uppercase font-bold text-md pb-2">Legal</p>
            <p class="hover:text-gray-600 font-medium"><a href="https://www.inspiredprogrammer.com/impressum/">Terms &amp; Conditions</a></p>
            <p class="hover:text-gray-600 font-medium"><a href="https://www.inspiredprogrammer.com/impressum/">Privacy Policy</a></p>
        </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;