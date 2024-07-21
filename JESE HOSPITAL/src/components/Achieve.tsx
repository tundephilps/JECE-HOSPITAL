import backgroundImage from "../assets/Belle2.png"; // Adjust the path as necessary

const Achieve = () => {
  return (
    <div className="relative text-white">
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative flex flex-col gap-4 justify-center items-center px-5 py-24 mx-auto z-50 text-white">
        <h1 className="text-3xl">Dedicated to Achieving your Dreams</h1>
        <p>
          Trust us to be with you every step of the way, offering hope,
          expertise, and a path to success.
        </p>
        <div className=" md:inline-block pt-6">
          <a
            href="javascript:void(0)"
            className="py-[18px] px-[40px] text-white bg-[#AB5089] rounded-full shadow "
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Achieve;
