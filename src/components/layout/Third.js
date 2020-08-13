import React from "react";
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Third() {
  return (
    <div class="bg-gray-900 font-nunito">
    <div class="container px-5 pb-20 pt-20 mx-auto">
        <div class="text-center mb-20">
          <h1 class="text-4xl text-white">How UpMock can help you</h1>
          <div class="flex justify-center mb-5">
            <div class="w-20 h-1 rounded-full bg-green-500 inline-flex"></div>
          </div>
          <p class="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white">You want to create stunning mockups for a presentation or a website, but feel lost how you should do it without wasting a lot of time. Sound familiar? UpMock will help you bring your idea to life without the hassle.</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Third;