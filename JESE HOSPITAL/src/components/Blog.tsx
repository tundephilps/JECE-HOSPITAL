import { FaArrowCircleRight } from "react-icons/fa";
import Blog1 from "../assets/Blog1.png";

import Blog2 from "../assets/Blog2.png";

import Blog3 from "../assets/Blog3.png";

const Blog = () => {
  return (
    <div>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className=" mb-10">
          <h2 className="text-2xl font-bold md:text-1xl text-[#AB5089] md:leading-tight">
            <span className="text-6xl">..</span> NEWS AND UPDATES
          </h2>
          <div className="flex flex-row justify-between w-full items-center mt-3">
            <p className="mt-1 text-black lg:text-3xl text-xs">
              Read the Latest Blog Articles From Us
            </p>
            <div className="flex flex-row items-center lg:text-base text-xs lg:gap-3  gap-1 text-[#AB5089] hover:underline">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="col-span-2">
            <a className="group relative block rounded-xl" href="#">
              <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
                <img
                  className="size-full absolute top-0 start-0 object-cover"
                  src={Blog1}
                  alt="Image Description"
                />
              </div>

              <div className="absolute bottom-0 inset-x-0 z-10">
                <div className="flex flex-col h-full p-4 sm:p-6">
                  <div className=" md:inline-block pb-6">
                    <a
                      href="javascript:void(0)"
                      className=" px-[15px] py-2 text-black bg-white opacity-40 rounded-full shadow text-xs "
                    >
                      BLOG POST
                    </a>
                  </div>
                  <p className="text-[15px]sm:text-3xl font-semibold text-white group-hover:text-white/80">
                    Short Blog Title on Fertility for Jece Hospital
                  </p>
                  <p className="mt-2 text-white/80">
                    Proven success stories of IVF treatment from other couples
                    and
                    <br /> evidenced from pregnancy rates 》50%.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <a className="group relative block rounded-xl" href="#">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <img
                className="size-full absolute top-0 start-0 object-cover"
                src={Blog2}
                alt="Image Description"
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <div className=" md:inline-block pb-6">
                  <a
                    href="javascript:void(0)"
                    className=" px-[15px] py-2 text-black bg-white opacity-40 rounded-full shadow text-xs "
                  >
                    BLOG POST
                  </a>
                </div>
                <p className="text-[15px]sm:text-3xl font-semibold text-white group-hover:text-white/80">
                  Short Blog Title on Fertility for Jece Hospital
                </p>
                <p className="mt-2 text-white/80">
                  A system that continues to innovate and improve itself
                </p>
              </div>
            </div>
          </a>{" "}
          <a className="group relative block rounded-xl" href="#">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
              <img
                className="size-full absolute top-0 start-0 object-cover"
                src={Blog3}
                alt="Image Description"
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10">
              <div className="flex flex-col h-full p-4 sm:p-6">
                <div className=" md:inline-block pb-6">
                  <a
                    href="javascript:void(0)"
                    className=" px-[15px] py-2 text-black bg-white opacity-40 rounded-full shadow text-xs "
                  >
                    BLOG POST
                  </a>
                </div>
                <p className="text-[15px]sm:text-3xl font-semibold text-white group-hover:text-white/80">
                  Short Blog Title on Fertility for Jece Hospital
                </p>
                <p className="mt-2 text-white/80">
                  Quality standards maintained in drugs, consumables.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
