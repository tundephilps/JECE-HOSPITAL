import Doctors from "../../assets/Doctors.png";

const Body2 = () => {
  return (
    <section className="bg-[#AB5089]">
      <div className="mx-auto lg:px-32  px-4 py-8 sm:px-6 sm:py-12  lg:py-16 ">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-[304px] overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-[400px]">
            <img
              alt=""
              src={Doctors}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 text-white ">
            <p className="text-white">TEAM WORK</p>
            <h2 className="text-3xl font-bold sm:text-4xl">Our Team</h2>

            <p className="mt-4 ">
              The team comprises of the gynecologist who heads the unit, doctors
              in training, medical officers, a team of fertility nurses,
              embryologists, admin staff, grounds men etc. This team works
              together in a coordinated fashion to bring the joy of motherhood
              to the infertile couple.
              <br />
              <br /> Our highly experienced team will guide you through the
              initial fertility process from initial client  assessment;
              ultrasound scanning right through to tailored treatment options.
            </p>
          </div>
        </div>
        <p className="text-white mb-12">
          We have a team consisting of the Medical director/gynecologist,
          fertility nurses, embryologists and administrative staff to provide a
          personalised service.
        </p>
      </div>
    </section>
  );
};

export default Body2;
