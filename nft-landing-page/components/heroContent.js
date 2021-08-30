import Image from 'next/image'
import HomeTshirt from '../public/tee1.jpg';
import Homelogo from '../public/biglogo.png';

export const HeroSection = () => {
  return (
    <div className="items-center justify-center w-full overflow-x-hidden pt-20 lg:pt-40 lg:pb-4 xl:pt-40 container flex flex-col items-center justify-between h-full max-w-7xl px-8 mx-auto -mt-32 lg:flex-row xl:px-0">
      <div className="z-30 flex flex-1 flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-1/2 lg:pt-20 xl:pt-40 lg:text-left">
      <Image placeholder="blur" height="350" width="380" src={Homelogo} className="shadow-lg w-full h-full relative flex" alt="Kill me" />
        {/* <h1 className="relative mb-4 text-3xl font-black leading-tight sm:text-6xl xl:mb-8">
          tishatsu
        </h1> */}
        <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-2xl lg:pr-20">
          Tishatsu is a collection of cool new age T-shirts on blockchain, be on the lookout for recently minted tishatsu T-Shirts.You can mint yours now.
        </p>
        <a href="https://nftvisionhack.herokuapp.com/" className="relative self-start inline-block w-auto px-20 py-4 mx-auto mt-0 text-base font-bold text-white bg-color-purple border-t border-gray-200 rounded-md shadow-xl sm:mt-1 fold-bold lg:mx-16">Mint Now</a>
      </div>
      <div className="z-30 flex flex-1 flex-col items-center w-full pt-10 text-center lg:w-1/2 lg:text-left">
        <Image placeholder="blur" height="780" width="680" src={HomeTshirt} className="shadow-lg w-full h-full relative flex" alt="Kill me" />
      </div>
    </div>

  )
};