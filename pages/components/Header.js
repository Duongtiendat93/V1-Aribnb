import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
function Header() {
  return (
    <div className="sticky top-0 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      {/* left */}
      <div className="relative flex item-center h-10 cursor-pointer my-auto z-50 ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="pl-5 flex-grow bg-transparent outline-none text-gray-400"
          type="text"
          placeholder="Start your search ..."
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white  rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-400">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer " />

        <div className="flex items-center border-2 space-x-2 rounded-full p-2 ">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
