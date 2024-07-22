import backgroundImage from "../../assets/Belle3.png"; // Adjust the path as necessary

const Body3 = () => {
  return (
    <div className="relative text-white">
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative  lg:px-32 px-4 py-24 mx-auto z-50 text-white space-y-5">
        <h1 className="text-6xl text-center">Our Etiquette</h1>
        <p className="text-center">
          We are seasoned professionals that carry out our duties with decorum,
          panache and civility. This is reflected in the way we
          <br /> communicate with each other as well as our clients through all
          media including the telephone, email etc. The tone and amplitude{" "}
          <br />
          of our speech is measured. We receive our clients with warm smiles
          maintaining utmost professionalism in our conduct.
        </p>
      </div>
    </div>
  );
};

export default Body3;
