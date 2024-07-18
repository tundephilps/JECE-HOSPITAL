import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="py-4 bg-[#AB5089] flex lg:flex-row flex-col items-center justify-between lg:px-32 w-full">
      <div className="flex flex-row lg:gap-8 gap-2 items-center">
        <div className="text-white flex flex-row items-center gap-2">
          <IoMail className="text-2xl" />
          <p className="lg:text-base text-xs">info@jecehospital.com</p>
        </div>
        <div className="h-6 w-[0.5px] bg-white" />
        <div className="text-white flex flex-row items-center gap-2">
          <BiSolidPhoneCall className="text-2xl" />
          <p className="lg:text-base text-xs">08034517847</p>
        </div>
      </div>

      <div className="flex flex-row text-white gap-4 lg:mt-0 mt-4">
        <div className="p-2 border-[1px] rounded-full border-white">
          <FaInstagram />
        </div>
        <div className="p-2 border-[1px] rounded-full border-white">
          <TiSocialLinkedin />
        </div>{" "}
        <div className="p-2 border-[1px] rounded-full border-white">
          <FaFacebookF />
        </div>{" "}
        <div className="p-2 border-[1px] rounded-full border-white">
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
