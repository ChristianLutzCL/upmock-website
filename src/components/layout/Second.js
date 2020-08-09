import React from "react";
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Second() {
  return (
    <div>
      <div class="div bg-gray-200 p-10 pt-32 pb-32 font-nunito">
      <div class="text-center text-4xl font-semibold text-gray-900">
        Join the closed <b className="text-green-500 font-bold">BETA</b>
      </div>
      <div class="pt-8">
        <div class="">
          <div class="text-xl text-gray-800 font-semibold text-center">
            <i><FontAwesomeIcon icon={faCheckCircle} className="text-green-500"/></i> You will get a 75% discount when UpMock gets live.
          </div>
          <div class="text-xl text-gray-800 font-semibold text-center pt-4">
            <i><FontAwesomeIcon icon={faCheckCircle} className="text-green-500"/></i> You will get informed fist when UpMock gets live.
          </div>
          <div class="text-xl text-gray-800 font-semibold text-center pt-4">
            <i><FontAwesomeIcon icon={faCheckCircle} className="text-green-500"/></i> You will get updates about the development process.
          </div>
          <div class="text-xl text-gray-800 font-semibold text-center pt-4">
            <i><FontAwesomeIcon icon={faCheckCircle} className="text-green-500"/></i> You will get involved with your own ideas.
          </div>
        </div>
      </div>
      <div class="flex justify-center pt-10">
        <div class="email-octopus-form-wrapper">
        <p class="email-octopus-success-message text-3xl text-green-500 font-bold" />
      <p class="email-octopus-error-message text-3xl text-red-500 font-bold" />
      <form
        method="POST"
        action="https://emailoctopus.com/lists/08efaeca-6303-11ea-a3d0-06b4694bee2a/members/embedded/1.3/add"
        class="email-octopus-form"
        data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
      >
        <div class="flex border-2 pl-4 rounded-md border-green-500 focus:bg-gray-800 active:bg-gray-800">
          <input
            id="field_0"
            name="field_0"
            type="email"
            class="leading-tight bg-gray-200 border-none w-120 text-gray-200 focus:outline-none focus:bg-gray-800 active:bg-gray-800 font-bold"
            tabindex="-1"
            autocomplete="nope"
            placeholder="Your E-Mail"
          />
          <div class="email-octopus-form-row-subscribe bg-transparent">
            <input type="hidden" name="successRedirectUrl" value="" />
            <button
              class="bg-green-500 hover:bg-green-700 md:font-md md:w-40 font-bold text-gray-100 rounded-r h-12"
              type="submit"
            >
              Join the BETA <i class="fas fa-check"></i>
            </button>
          </div>
        </div>
      </form>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
        <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.4/formEmbed.js"></script>
      </div>
    </div>
    </div>
  );
}

export default Second;