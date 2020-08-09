import React, { Suspense } from "react";
import CTA from "./CTA";
import Mockup from './Mockup'
import Logo from "../img/logo.svg";

function Main() {
  return (
    <div className="flex">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Nunito:wght@200;300;400;600;700;800;900&family=Rubik:ital,wght@0,500;0,700;1,500');
    </style>
      <div className="px-10 xl:pl-40 xl:pt-40 xl:pb-40 xl:w-3/5 font-nunito">
        <h1 className="text-4xl text-center font-bold text-gray-200 leading-tight pb-10 md:text-left lg:text-5xl lg:w-1/2 xl:text-5xl xl:w-3/4">
          Create <a className="text-green-500">stunning</a> 3D-Mockups in seconds
        </h1>
        <p className="py-4 text-center font-normal text-xl text-gray-200 md:text-left lg:w-2/3 lg:text-xl xl:w-4/5 font-nunito">
          Forget about learning hard-to-use 3D software. UpMock enables you to
          create awesome 3D mockups for your presentation, your website or
          something else in just a few minutes right within your browser.
        </p>
        <CTA />
      </div>
      <div className="xl:pl-10 xl:pr-40 xl:pt-20 xl:pb-20 xl:w-2/5 text-white font-nunito">
        <Suspense fallback={<img class="h-10 w-10 mr-2" src={Logo} alt="UpMock Logo" />}><Mockup/></Suspense>
      </div>
    </div>
  );
}

export default Main;
