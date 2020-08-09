import React from "react";

function CTA() {
  return (
    <div className="email-octopus-form-wrapper pt-10">
      <p class="email-octopus-success-message text-3xl text-green-500 font-bold" />
      <p class="email-octopus-error-message text-3xl text-red-500 font-bold" />
      <form
        method="POST"
        action="https://emailoctopus.com/lists/08efaeca-6303-11ea-a3d0-06b4694bee2a/members/embedded/1.3/add"
        class="email-octopus-form justify-center md:justify-left md:w-2/3 xl:w-1/2 bound"
        data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
      >
        <div class="flex border-2 pl-4 rounded-md border-green-500 focus:bg-gray-800 active:bg-gray-800">
          <input
            id="field_0"
            name="field_0"
            type="email"
            class="leading-tight bg-gray-800 border-none w-full text-gray-200 focus:outline-none focus:bg-gray-800 active:bg-gray-800 font-bold"
            tabindex="-1"
            autocomplete="nope"
            placeholder="your@email.com"
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
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
      <script src="https://emailoctopus.com/bundles/emailoctopuslist/js/1.4/formEmbed.js"></script>
    </div>
  );
}

export default CTA;
