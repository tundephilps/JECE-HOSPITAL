import Family from "../../assets/Family.png";
import { FaArrowCircleRight } from "react-icons/fa";

const Body1 = () => {
  return (
    <div className=" px-4 py-10 sm:px-6 lg:px-24 lg:py-14 mx-auto bg-white ">
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

        <div className="mt-5 sm:mt-10 lg:mt-0  text-black">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <p className="text-[#AB5089]">OUR PHILOSOPHY</p>
              <h2 className="font-bold text-3xl lg:text-4xl text-black">
                About Jece Hospital
              </h2>
              <p className="text-black text-[24px]">
                Infertile couples are badly treated and battered by people while
                moving from place to place in search of succour. They are beaten
                by relatives and lied to by various “solution-providers”.
                <br />
                <br />
                Our overriding principle should be to make our environment that
                of trust where we treat them with dignity and respect. We
                understand and operate by the principles of medical ethics which
                are:
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

export default Body1;
