import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import styles from "./Header.module.css";

const Header = () => {
  const currentRoute = usePathname();

  console.log(currentRoute);
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <div className=" mr-9">
              <span className="text-gray-400 text-[12px] mr-2">
                Cryptocurrencies:
              </span>
              <span className="text-indigo-600 text-[13px]">{1412}</span>
            </div>
            <div>
              <span className="text-gray-400  text-[12px] mr-2">Markets:</span>
              <span className="text-indigo-600 text-[13px]">{29385}</span>
            </div>
          </div>
          <div className="flex flex-row">
            <div className=" mr-9">
              <span className="text-gray-400  text-[12px] mr-2">
                Market cap:
              </span>
              <span className="text-indigo-600 text-[13px]">
                $331,761,957,269
              </span>
            </div>
            <div>
              <span className="text-gray-400  text-[12px] mr-2">
                Volume 24h:
              </span>
              <span className="text-indigo-600 text-[13px]">
                $29,385,395,122
              </span>
            </div>
          </div>
          <div>
            <span className="text-gray-400  text-[12px] mr-2">
              BTC Dominance:
            </span>
            <span className="text-indigo-600 text-[13px]">43.7%</span>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto flex justify-between items-center h-full ">
        <Link href="/">
          <div className="font-bold text-2xl">Nogucat</div>
        </Link>
        <nav>
          <ul className="hidden sm:flex ease-in duration-300">
            <li
              className={`p-4 rounded-md  duration-100 ease-in-out  hover:text-secondary-700 ${
                isScrolled ? "text-white" : "text-black"
              } ${currentRoute === "/" ? styles.active : styles.nonActive}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`p-4 rounded-md hover:text-secondary-700 duration-100 ease-in-out ${
                isScrolled ? "text-white " : "text-black"
              }  ${
                currentRoute === "/contact" ? styles.active : styles.nonActive
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `white` }} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 opacity-100 z-1 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-0 right-0 bottom-0 opacity-0 -z-10 invisible flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul className="flex flex-col w-full">
            <li
              onClick={handleNav}
              className={`p-4 text-4xl hover:text-secondary-300 ${
                currentRoute === "/" ? styles.activeMobile : styles.nonActive
              }`}
            >
              <Link href="/">Home</Link>
            </li>

            <li
              onClick={handleNav}
              className={`p-4 text-4xl hover:text-secondary-300 ${
                currentRoute === "/contact"
                  ? styles.activeMobile
                  : styles.nonActive
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
