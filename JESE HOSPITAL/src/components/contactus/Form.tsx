import { CiLocationOn, CiMail } from "react-icons/ci";
import { LuSmartphone } from "react-icons/lu";

const Form = () => {
  return (
    <div className="bg-[#f9f9f9] lg:px-32 py-12 ">
      <div className="flex lg:flex-row flex-col rounded-lg">
        <div className="lg:w-[40%] bg-[#AB5089] lg:p-12 p-4 rounded-lg text-white space-y-4">
          <h1 className="text-3xl ">Get in Touch</h1>
          <p>Send us a message and we will respond in minutes</p>
          <div className="text-white flex flex-row items-center gap-3 pt-3">
            <CiLocationOn /> Kubwa. Abuja, Nigeria
          </div>
          <p>
            <a
              className="inline-flex items-center  gap-x-2 text-white hover:text-gray-200"
              href="#"
            >
              <CiMail /> info@jecehospital.com
            </a>
          </p>
          <p>
            <a
              className="inline-flex items-center gap-x-2 text-white hover:text-gray-200"
              href="#"
            >
              <LuSmartphone /> 08034517847
            </a>
          </p>
          <h1 className="text-3xl ">Our hours</h1>
          <p>10:00AM - 22:00PM</p>
          <p>Monday - Sunday</p>
          <div className="lg:h-64 " />
          <p className="">
            Want to book a personal Appointment?{" "}
            <span className="text-bold underline"> Click Here </span>
          </p>
        </div>
        <div className="lg:w-[60%] bg-white lg:p-12 p-4">
          <div className="flex flex-col py-12 ">
            <form>
              <div className="grid gap-4 lg:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 bg-[#f9f9f9] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-lastname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 bg-[#f9f9f9] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-email-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="hs-email-contacts-1"
                      id="hs-email-contacts-1"
                      className="py-3 bg-[#f9f9f9] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-phone-number-1"
                      className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="hs-phone-number-1"
                      id="hs-phone-number-1"
                      className="py-3 bg-[#f9f9f9] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="hs-about-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    rows={10}
                    name="hs-about-contacts-1"
                    className="py-3 bg-[#f9f9f9] px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                  ></textarea>
                </div>
              </div>

              <div className="pt-24 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#DD0A35] text-white disabled:opacity-50 disabled:pointer-events-none"
                >
                  Send Message
                </button>
              </div>

              <div className="mt-3 text-center"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
