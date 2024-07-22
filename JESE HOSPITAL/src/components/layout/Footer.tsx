import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { LuSmartphone } from "react-icons/lu";
import footer from "../../assets/Footer.png";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="mt-auto bg-black w-full">
        <div className="mt-auto w-full py-10 px-4 sm:px-6 lg:pt-20 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">CONTACT US</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <a
                    className="inline-flex items-center gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    <CiMail /> jecehospital@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex items-center  gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    <CiMail /> info@jecehospital.com
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex items-center gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    <LuSmartphone /> 08034517847
                  </a>
                </p>
                <img src={footer} className="h-[78px] w-[211px]" />
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">QUICK LINKS</h4>

              <div className="mt-3 grid space-y-6">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Home
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    About Us
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Services
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Our Medical Director
                  </a>
                </p>
              </div>
            </div>

            <div className="col-span-1 ">
              <h4 className="font-semibold text-gray-100">LEGAL</h4>

              <div className="mt-3 grid space-y-6">
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Support
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Help
                  </a>{" "}
                  {/* <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                    We're hiring
                  </span> */}
                </p>
                <p>
                  <a
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">LOCATION</h4>

              <div className="text-white flex flex-row items-center gap-3 pt-3">
                <CiLocationOn /> Kubwa. Abuja, Nigeria
              </div>

              <p className="text-white pt-4 pb-4">NEWSLETTER</p>
              <p className="text-white text-xs">
                Sign up for hints, insights and latest news from Jece Hospital
              </p>
              <form>
                <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 lg:bg-white bg-transparent rounded-full p-1">
                  <div className="w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Search
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-3 px-4 block w-full border-transparent rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 "
                      placeholder="Your Email Address"
                    />
                  </div>
                  <a
                    className="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-[#AB5089] text-white  "
                    href="#"
                  >
                    Subscribe
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full h-[0.1px] mt-8 bg-white" />
          <div className="  lg:mt-12 mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2024 Jese Hospital. All rights reserved.
              </p>
            </div>

            <div className="space-x-4">
              <a
                className="size-10  border-[0.5px]  rounded-full border-white p-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold   text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="size-10  border-[0.5px]  rounded-full border-white p-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold   text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <FaLinkedin />
              </a>
              <a
                className="size-10  border-[0.5px]  rounded-full border-white p-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold   text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <FaFacebook />
              </a>
              <a
                className="size-10  border-[0.5px]  rounded-full border-white p-2 inline-flex justify-center items-center gap-x-2 text-sm font-semibold   text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
