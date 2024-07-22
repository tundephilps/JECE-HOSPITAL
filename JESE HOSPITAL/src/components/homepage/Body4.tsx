import { FaArrowCircleRight } from "react-icons/fa";
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";

const Body4 = () => {
  const posts = [
    {
      title: "IVF Treatment Success",
      desc: "Successful pregnancy after the first IVF cycle. Delivered a healthy baby boy.",
      img: Card1,
      href: "javascript:void(0)",
    },
    {
      title: "Surrogacy Success",
      desc: "Successful pregnancy and birth of a baby boy through a surrogate",
      img: Card2,
      href: "javascript:void(0)",
    },
    {
      title: "Preimplantation Genetic Testing",
      desc: "Identified and transferred a healthy embryo, resulting in a successful pregnancy",
      img: Card3,
      href: "javascript:void(0)",
    },
  ];
  return (
    <section className="mt-12 mb-12 mx-auto px-4 lg:px-32 md:px-8">
      <div className="text-start">
        <h1 className=" text-[#AB5089] font-semibold">
          PORTFOLIO & CASE STUDIES
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-between">
        {" "}
        <p className="mt-3 text-gray-500 text-3xl">
          IVF Treatment Success Stories
        </p>
        <div className="flex flex-row items-center gap-3 text-[#AB5089] hover:underline">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
          >
            See all
          </a>
          <FaArrowCircleRight />
        </div>
      </div>
      <div className="mt-8 grid lg:gap-8 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-48 rounded-t-md"
              />

              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1 w-[90%]">
                  {items.desc}
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Body4;
