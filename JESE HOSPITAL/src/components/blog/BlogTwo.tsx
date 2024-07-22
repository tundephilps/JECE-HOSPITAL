import { FaArrowCircleRight } from "react-icons/fa";
import Card1 from "../../assets/Card1.png";
import Card2 from "../../assets/Card2.png";
import Card3 from "../../assets/Card3.png";

const BlogTwo = () => {
  const posts = [
    {
      title: "Port Harcourt Medical Journal.",
      desc: "Ekweani JC, Bature SB, Avidime S. The awareness and use of modern contraceptive methods among female undergraduate students in a tertiary institution.",
      img: Card1,
      href: "javascript:void(0)",
    },
    {
      title: "J West Afr Coll Surg.",
      desc: "A Comparative Study Of Intramuscular Acetaminophen Versus Intramuscular Pentazocine As Labour Analgesia In Zaria, Northwestern Nigeria. ",
      img: Card2,
      href: "javascript:void(0)",
    },
    {
      title: "Arch Int Surg 2016",
      desc: "Ultrasound-guided percutaneous drainage of pyometra in cervical cancer patients on radiotherapy.",
      img: Card3,
      href: "javascript:void(0)",
    },
  ];
  return (
    <section className="mt-12 mb-12 mx-auto px-4 lg:px-32 md:px-8">
      <div className="text-start"></div>
      <div className="flex lg:flex-row flex-col items-center justify-between">
        {" "}
        <p className="mt-3 text-black text-3xl">Recent News & Articles</p>
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

              <div className="pt-6 p-6 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-6 w-[90%]">
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

export default BlogTwo;
