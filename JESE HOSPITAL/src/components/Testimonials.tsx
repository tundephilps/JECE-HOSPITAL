import React from "react";
import Testi from "../assets/Testi.png";
import { IoStar } from "react-icons/io5";
import Star from "../assets/Star.png";

import Star2 from "../assets/Star2.png";

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="lg:px-32 mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col gap-2 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="text-[#AB5089]">TESTIMONIALS</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hear from our Patients
          </h1>
          <p className="mb-8 leading-relaxed">
            Dont just take our word for it. Read the experience and
            <br /> testimonial from our patients who have trusted us with their
            <br />
            care.
          </p>
          <div className="text-[#04B67A] flex flex-row items-center gap-2">
            <IoStar /> Trust Pilot
          </div>
          <div className="flex flex-row items-center">
            <img src={Star} />
          </div>
          <p>
            4.7 out of 5 stars based on 3, 562 reviews | showing our 4 and 5
            star reviews
          </p>
        </div>
        <div className=" ">
          <img
            className="object-cover object-center rounded lg:w-[660px] lg:h-[480px] h-full w-full"
            alt="hero"
            src={Testi}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
