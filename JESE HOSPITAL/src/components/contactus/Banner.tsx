import backgroundImage from "../../assets/Beds.png"; // Adjust the path as necessary

const Banner = () => {
  return (
    <div className="relative text-white">
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative  lg:px-32 px-4 py-24 mx-auto z-50 text-white space-y-3">
        <h1 className="text-6xl">Contact Us</h1>
        <p>
          Home / <span className="text-[#AB5089]">Contact Us</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
