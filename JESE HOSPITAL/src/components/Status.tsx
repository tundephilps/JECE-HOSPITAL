import backgroundImage from "../assets/Belle.png"; // Adjust the path as necessary

const Status = () => {
  return (
    <div className="relative text-white">
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative container px-5 py-24 mx-auto z-50 text-white">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl ">
              10+
            </h2>
            <p className="leading-relaxed mt-3">YEARS EXPERIENCE</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl ">
              800+
            </h2>
            <p className="leading-relaxed mt-3">SATISFIED CLIENTS</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl ">
              1000+
            </h2>
            <p className="leading-relaxed mt-3">ISSUES SOLVED</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl ">
              60+
            </h2>
            <p className="leading-relaxed mt-3">TEAM MEMBERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
