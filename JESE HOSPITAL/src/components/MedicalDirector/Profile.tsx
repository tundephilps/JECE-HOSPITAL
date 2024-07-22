import profile from "../../assets/profile.png";

const Profile = () => {
  return (
    <>
      <section className="py-14 bg-[#f9f9f9]">
        <div className="lg:px-32 mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="relative sm:hidden lg:block lg:w-full">
              <img
                src={profile}
                className="md:max-w-lg lg:w-full sm:rounded-lg"
                alt=""
              />
              <div className="bg-[#AB5089] absolute p-6 bottom-[15%] w-[100%] text-center text-white ">
                <p>Dr John Ekweani</p>
                <p className="font-extralight">
                  MBBS, FWACS, FMCOG, PGD-ART, MBA
                </p>
              </div>
            </div>
            <div className="px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-4xl">
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Dr John Ekweani
              </p>
              <p className="mt-3 text-gray-600 text-[23px]">
                Dr John Ekweani, MBBS, FWACS, FMCOG, PGD-ART, MBA (Finance and
                Investments) A consultant gynecologist and expert in fertility
                medicine trained in the famous Ahmadu Bello University Zaria and
                obtained his fellowship in obstetrics and gynecology from the
                west african college of surgeons and the national post-graduate
                medical college of Nigeria. He also has a post-graduate diploma
                in assisted reproductive technology and a masters in business
                administration with subspecialisation in finance and
                investments. He is actively involved fertility management and
                has recorded successful IVF treatments for clients using own
                gamete, donor gametes, surrogacy, preimplantation genetic
                testing for sex selection and screening of genetic disorders.
                John has a knack for details and openness to his clients and has
                enjoyed positive reviews from clients and colleagues alike.
                <br />
                <br /> He is a member of SOGON, ESHRE, AFRH and an associate
                member of the RCOG.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[white] lg:px-32 px-4 py-12 text-[22px]">
        <p>
          He has served in the following capacities : Technical officer RMNCH
          FHI360, Consultant Gynecologist at the Bridge Clinic Abuja, Consultant
          Gynecologist at the Federal Medical Center Abuja and a member of the
          research team of the African fertility and reproductive health (AFRH).
          He has also published a good number of scientific articles in both
          national and international journals.
        </p>
      </section>
    </>
  );
};

export default Profile;
