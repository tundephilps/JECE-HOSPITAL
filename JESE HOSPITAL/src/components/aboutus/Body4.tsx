import grid4 from "../../assets/Value1.png";

import grid2 from "../../assets/Value2.png";
import grid3 from "../../assets/Value3.png";

const Body4 = () => {
  return (
    <section className="text-gray-700 bg-gray-100 body-font overflow-hidden">
      <div className="lg:px-64 px-4 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-4xl text-[#232323]">
            Our Values and Ethics
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg shadow-md bg-white flex flex-col gap-8 items-center relative overflow-hidden">
              <img src={grid4} className="h-24 w-24" />
              <p className="text-lg font-extrabold text-center">Care</p>
              <p className="text-center text-lg">
                We ensure excellence <br />
                and quality in every
                <br /> aspect of our services.
              </p>
            </div>
          </div>
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg shadow-md bg-white flex flex-col gap-8 items-center relative overflow-hidden">
              <img src={grid2} className="h-24 w-24" />
              <p className="text-lg font-extrabold text-center">
                Professionalism
              </p>
              <p className="text-center text-lg">
                The execution of
                <br /> duties is with utmost <br />
                professionalism.
              </p>
            </div>
          </div>{" "}
          <div className="p-4 xl:w-1/3 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg shadow-md bg-white flex flex-col gap-8 items-center relative overflow-hidden">
              <img src={grid3} className="h-24 w-24" />
              <p className="text-lg font-extrabold text-center">Honesty</p>
              <p className="text-center text-lg">
                We believe in building
                <br /> trust and a patient- <br />
                provider relationship.
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

export default Body4;
