import { IoSend } from "react-icons/io5";

const Youtube = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="lg:px-32 mx-auto flex px-5 py-12 md:flex-row flex-col lg:gap-6 items-center">
          <div className="lg:w-[650px] h-[300px] md:w-1/2 w-6/6 mb-10 md:mb-0">
            <iframe
              //   width="650"
              //   height="315"
              className="w-full h-full"
              src="https://www.youtube.com/embed/flj1ftXOUt8?si=Xtas_mm1_d5VS8ve"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              //  referrerpolicy="strict-origin-when-cross-origin"
              //   allowfullscreen
            ></iframe>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <p className="text-[#AB5089]">HOW WE WORK</p>
            <h1 className="text-4xl">Our Commitment to Your Success</h1>

            <div className="flex flex-row place-items-start gap-6 pt-4 text-[14px]">
              <IoSend className="text-[#AB5089] h-4 w-4" />{" "}
              <p className="text-start">
                Proven success stories of IVF treatment from other couples{" "}
                <br /> and evidenced from pregnancy rates 》50%.
              </p>
            </div>

            <div className="flex flex-row place-items-start gap-6 pt-4 text-[14px]">
              <IoSend className="text-[#AB5089] h-6 w-6" />{" "}
              <p className="text-start">
                Attention to details as client’s sperms and eggs stand the risk
                of “mixture” while undergoing incubation if there is a lack of
                this quality.
              </p>
            </div>

            <div className="flex flex-row place-items-start gap-6 pt-4 text-[14px]">
              <IoSend className="text-[#AB5089] h-6 w-6" />
              <p className="text-start">
                Care and empathy for the couple which begins right from the
                security apparatus , the client front desk officer, the
                administrative and clinical teams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Youtube;
