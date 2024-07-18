import Bed from "../assets/Bed.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Body1 = () => {
  return (
    <div>
      <section className="mt-12 mx-auto  pb-4 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4  lg:pl-24 flex-1 sm:text-center lg:text-left">
          <p className="text-[#ab5089]">WHAT WE DO</p>
          <h1 className="text-gray-800 font-bold text-4xl xl:text-5xl font-manrope ">
            Welcome to Jece Hospital
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            We provide a wide range of assisted reproductive treatments. Our
            goal is to satisfy our customers. We do it as easy as possible for
            couples to have a baby, whether it’s through the use of couples’
            gametes, egg/embryo donation or surrogacy.
          </p>
          <div>
            <p className="text-gray-800 py-3">
              We at Jece Hospital always fully focused on helping youto overcame
              any hurdle.
            </p>
            <div className="flex flex-row items-center gap-3 text-[#AB5089] hover:underline">
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
              </a>
              <FaArrowCircleRight />
            </div>
          </div>
        </div>
        <div className="flex-1 text-center mt-4 lg:mt-0 lg:ml-3">
          <img
            src={Bed}
            className="w-full mx-auto sm:w-10/12  lg:w-[579px] lg:h-[599px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Body1;
