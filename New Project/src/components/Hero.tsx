import backgroundImage from "../assets/Hero.png"; // Adjust the path as necessary

const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img
          src={backgroundImage}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700 ">
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full  md:px-32 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-manrope font-extrabold text-3xl lg:leading-10  tracking-tight text-white sm:text-4xl sm:leading-none">
                  Dedicated to Making <br className="hidden md:block" /> Your
                  Parenthood <br className="hidden md:block" /> Dreams Come True
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg pb-6">
                  A private healthcare service that majors in delivering quality
                  fertility (IVF) and obstetric.
                </p>
                <div className=" md:inline-block">
                  <a
                    href="javascript:void(0)"
                    className="py-[18px] px-[40px] text-white bg-[#AB5089] rounded-full shadow "
                  >
                    More About Us
                  </a>
                </div>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">
                    Book an Appointment Today!
                  </h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <input
                        placeholder="Full Name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#F6F6F6] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <input
                        placeholder="Date"
                        required
                        type="date"
                        className="flex-grow  w-full h-12 px-4 mb-2 transition duration-200 bg-[#F6F6F6] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <input
                        placeholder="Phone Number"
                        required
                        type="number"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#F6F6F6] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <input
                        placeholder="Email Address"
                        required
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-[#F6F6F6] border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center bg-[#AB5089] justify-center w-full h-14 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
