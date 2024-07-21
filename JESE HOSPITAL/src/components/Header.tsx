import { useState } from "react";
import logo from "../assets/logo.png";
import { MdOutlineMenu } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "HOME", path: "javascript:void(0)" },
    { title: "ABOUT US", path: "javascript:void(0)" },
    { title: "SERVICES", path: "javascript:void(0)" },
    { title: "OUR MEDICAL DIRECTOR", path: "javascript:void(0)" },

    { title: "BLOG", path: "javascript:void(0)" },
  ];

  return (
    <div>
      <nav className="bg-white w-full border-b md:border-0 md:static">
        <div className="items-center px-4  mx-auto md:flex md:px-32">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="javascript:void(0)">
              <img src={logo} width={180} height={92} alt="Float UI logo" />
            </a>
            <div className="md:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                onClick={() => setState(!state)}
              >
                {state ? <FaTimes /> : <MdOutlineMenu />}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="text-gray-600 hover:text-[#AB5089]">
                    <a href={item.path}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="hidden md:inline-block">
            <a
              href="javascript:void(0)"
              className="py-[18px] px-[40px] text-white bg-[#AB5089] hover:bg-indigo-700 rounded-full shadow"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
