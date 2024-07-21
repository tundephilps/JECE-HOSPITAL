import React from "react";
import Family from "../assets/Family.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Body2 = () => {
  return (
    <div className=" px-4 py-10 sm:px-6 lg:px-24 lg:py-14 mx-auto bg-[#AB5089]  ">
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div className="relative">
          <div
            className="absolute bg-red-700 h-[210px] w-[185px] bottom-[-2%] "
            style={{ zIndex: -1 }}
          />
          <img
            className="rounded-xl  "
            style={{ zIndex: 50 }}
            src={Family}
            alt="Image Description"
          />
        </div>

        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <p className="text-white">WHY CHOOSE US</p>
              <h2 className="font-bold text-3xl lg:text-4xl text-white">
                Why Choose Fertility Treatment <br /> With Us
              </h2>
              <p className="text-white text-[24px]">
                Infertility is not just a biological problem that makes a couple
                unable to have a child of their own, but it is also an
                emotional, psychological and social problem in our environment,
                especially so as a high premium is placed on childbearing. In
                this regard, the treatment of this problem goes beyond
                pharmaco-biological solutions or the mere employment of
                sophisticated technologies.
              </p>
              <div className="flex flex-row items-center gap-3 text-white hover:underline">
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Read more
                </a>
                <FaArrowCircleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body2;
