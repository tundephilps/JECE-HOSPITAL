import Services1 from "../../assets/Services1.png";
import Services2 from "../../assets/Services2.png";
import Services3 from "../../assets/Services3.png";
import Services4 from "../../assets/Services4.png";

const Body1 = () => {
  return (
    <>
      <section className="py-14">
        <div className="lg:px-32 mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block lg:w-full">
              <img
                src={Services1}
                className="md:max-w-lg lg:w-full sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-4xl">
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                In Vito Fertilization (IVF)
              </p>
              <p className="mt-3 text-gray-600 text-[24px]">
                At Jece Hospital, IVF is the cornerstone of our assisted
                reproductive technology (ART) services. During this procedure,
                we carefully fertilize the couple's sperm and egg in a
                laboratory dish. The resulting embryo is then expertly placed in
                the woman’s womb, providing the best possible environment for a
                successful pregnancy. Our IVF services offer hope and support to
                couples facing fertility challenges, guided by our experienced
                and compassionate team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-[#f9f9f9]">
        <div className="lg:px-32 mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-4xl">
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Fertility Investigation
              </p>
              <p className="mt-3 text-gray-600 text-[24px]">
                Our fertility investigation services involve comprehensive
                screening of couples’ reproductive systems to identify any
                underlying issues. By pinpointing the root causes, we can offer
                tailored and effective treatments to support your journey
                towards parenthood. Our dedicated team is committed to providing
                personalized care and the highest standards of medical
                excellence.
              </p>
            </div>
            <div className="flex-1 sm:hidden lg:block lg:w-full">
              <img
                src={Services2}
                className="md:max-w-lg lg:w-full sm:rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="lg:px-32 mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block lg:w-full">
              <img
                src={Services3}
                className="md:max-w-lg lg:w-full sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-4xl">
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Preimplantation Genetic Testing
              </p>
              <p className="mt-3 text-gray-600 text-[24px]">
                At Jece Hospital, we offer comprehensive Preimplantation Genetic
                Testing (PGT) services to assist our clients in achieving their
                family planning goals with confidence. Our PGT services are
                particularly beneficial for clients at risk of delivering a
                child with sickle cell disease, those seeking family balancing,
                individuals experiencing recurrent miscarriages, and those
                affected by age-related fertility concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-14 bg-[#f9f9f9]">
        <div className="lg:px-32 mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-4xl">
              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Preimplantation Genetic Testing
              </p>
              <p className="mt-3 text-gray-600 text-[24px]">
                At Jece Hospital, IVF is the cornerstone of our assisted
                reproductive technology (ART) services. During this procedure,
                we carefully fertilize the couple's sperm and egg in a
                laboratory dish. The resulting embryo is then expertly placed in
                the woman’s womb, providing the best possible environment for a
                successful pregnancy. Our IVF services offer hope and support to
                couples facing fertility challenges, guided by our experienced
                and compassionate team.
              </p>
            </div>
            <div className="flex-1 sm:hidden lg:block lg:w-full">
              <img
                src={Services4}
                className="md:max-w-lg lg:w-full sm:rounded-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body1;
