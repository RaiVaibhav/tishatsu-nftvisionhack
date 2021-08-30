import { useState } from "react";
import logo from '../public/logo.png';
import Image from 'next/image'

export const NavBar = () => {
  const [isClosed, setIsClosed] = useState(false);

  const onNavButtonClick = () => {
    setIsClosed(!isClosed);
  }

  return (
    <header id="header" className=" shadow-sm relative z-50 w-full h-24">
      <div className="container flex items-center justify-center h-full max-w-7xl px-8 mx-auto sm:justify-between xl:px-0">
        <a
          href="/"
          className="relative flex items-center inline-block h-5 h-full font-black leading-none"
        >
          {/* Add icon here */}
          <Image placeholder="blur" height="96" width="105" src={logo} className="shadow-lg w-full h-full relative flex" alt="Kill me" />
          {/* <span className="ml-3 text-xl bg-nft-color">
            GOF<span className="text-pink-500">.</span>
          </span> */}
        </a>

        <nav
          id="nav"
          className={`absolute top-0 left-0 z-50 flex flex-col items-center justify-between w-full h-64 pt-5 mt-24 text-sm text-gray-800 bg-white border-t border-gray-200 md:w-auto md:flex-row md:h-24 lg:text-base md:bg-transparent md:mt-0 md:border-none md:py-0 md:flex md:relative ${ isClosed ? '' : 'hidden'}`}
        >
          <a
            href="#"
            className="ml-0 mr-0 font-bold duration-100 md:ml-12 md:mr-3 lg:mr-8 transition-color text-purple lg:text-xl"
          >
            Home
          </a>
          <a
            href="#timeline"
            className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color text-purple lg:text-xl"
          >
            Timeline
          </a>
          <a
            href="#team"
            className="mr-0 font-bold duration-100 md:mr-3 lg:mr-8 transition-color text-purple lg:text-xl"
          >
            Team
          </a>
          <div className="flex flex-col block w-full font-medium border-t border-gray-200 md:hidden">
            <a
              href="https://nftvisionhack.herokuapp.com/"
              className="relative inline-block w-full px-5 py-3 text-sm leading-none text-center text-white bg-color-purple fold-bold"
            >
              Mint Now
            </a>
          </div>
        </nav>

        <div className="absolute left-0 flex-col items-center justify-center hidden w-full pb-8 mt-48 border-b border-gray-200 md:relative md:w-auto md:bg-transparent md:border-none md:mt-0 md:flex-row md:p-0 md:items-end md:flex md:justify-between">
          <a
            href="https://nftvisionhack.herokuapp.com/"
            className="relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all transition duration-100 duration-300 bg-color-purple rounded shadow-md fold-bold lg:bg-white lg:text-purple sm:w-full  hover:shadow-xl"
          >
            Mint Now
          </a>
        </div>

        <div
          id="nav-mobile-btn"
          className={`absolute top-0 right-0 z-50 block w-6 mt-8 mr-10 cursor-pointer select-none md:hidden sm:mt-10 ${isClosed ? 'close': ''}`}
          onClick={onNavButtonClick}
        >
          <span className="block w-full h-1 mt-2 duration-200 transform bg-color-purple rounded-full sm:mt-1"></span>
          <span className="block w-full h-1 mt-1 duration-200 transform bg-color-purple rounded-full"></span>
          <span className="block w-full h-1 mt-1 duration-200 transform bg-color-purple rounded-full"></span>
        </div>
      </div>
    </header>
  );
};
