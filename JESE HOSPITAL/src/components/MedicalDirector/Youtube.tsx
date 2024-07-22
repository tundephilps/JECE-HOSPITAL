import { IoSend } from "react-icons/io5";

const Youtube = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="lg:px-32 mx-auto flex px-5 py-12 md:flex-row flex-col lg:gap-6 items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center space-y-4">
            <IoSend className="text-[#AB5089] h-4 w-4" />{" "}
            <h1 className="text-4xl">Cumulative Experience</h1>
            <p>
              Dr John has worked as technical officer RMNCH, Consultant
              Gynecologist at the Bridge Clinic Abuja; a trainer at the SHOPS
              PLUS project providijg long acting reversible contraceptives and a
              Consultant Gynecologist at the Federal Medical Center Abuja. He
              has now opened his private practice JECE after garnering years of
              experience is and is accredited to practice by the west African
              college of surgeons(WACS). He has featured in a number of radio
              and TV shows where he has discussed widely on fertility related
              issues such as PCOS, age related ovarian decline, endometriosis
              and male factor infertility
            </p>
          </div>
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
        </div>
      </section>
    </>
  );
};

export default Youtube;
