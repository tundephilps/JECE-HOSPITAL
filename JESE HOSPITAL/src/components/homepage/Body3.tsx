import grid4 from "../assets/grid4.png";

import grid3 from "../assets/grid3.png";
import grid2 from "../assets/grid2.png";
import grid1 from "../assets/grid1.png";

const Body3 = () => {
  return (
    <section className="text-gray-700 bg-gray-100 body-font overflow-hidden">
      <div className=" lg:px-32 px-4 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className=" font-medium title-font mb-2 text-[#AB5089]">
            WHAT WE OFFER
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-4xl text-[#232323]">
            Our Range of Services
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg shadow-md bg-white flex flex-col gap-8 items-center relative overflow-hidden">
              <img src={grid4} className="h-24 w-24" />
              <p className="text-lg font-extrabold text-center">
                In Vito <br /> Fertilization (IVF)
              </p>
              <p className="text-center text-lg">
                IVF is the basic of <br /> assisted reproductive <br />
                technology (ART).
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg shadow-md bg-white flex flex-col gap-8 items-center relative overflow-hidden">
              <img src={grid1} className="h-24 w-24" />
              <p className="text-lg font-extrabold text-center">
                Fertility <br />
                Investigation{" "}
              </p>
              <p className="text-center text-lg">
                Screening reproductive <br />
                systems to diagnose <br /> and treat.
              </p>
            </div>
          </div>{" "}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg shadow-md bg-white flex flex-col gap-8 items-center relative overflow-hidden">
              <img src={grid2} className="h-24 w-24" />
              <p className="text-lg font-extrabold text-center">
                Third Party <br />
                Reproduction
              </p>
              <p className="text-center text-lg">
                IVF is the basic of <br />
                assisted reproductive <br /> technology (ART).
              </p>
            </div>
          </div>{" "}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg shadow-md bg-white flex flex-col gap-8 items-center relative overflow-hidden">
              <img src={grid3} className="h-24 w-24" />
              <p className="text-lg font-extrabold text-center">
                Preimplantation <br /> Genetic Testing
              </p>
              <p className="text-center text-lg">
                Clients with genetic <br /> risks and age factor <br />
                benefit from this
              </p>
            </div>
          </div>
        </div>

        <p className="text-center pt-12 text-[#606060]">
          Making Parenthood Possible{" "}
          <span className="text-[#AB5089] hover:underline">
            See More Services
          </span>
        </p>
      </div>
    </section>
  );
};

export default Body3;
