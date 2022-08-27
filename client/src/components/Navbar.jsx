import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FcDataEncryption } from "react-icons/fc";

const NavBarItem = ({ title }) => (
  <li className="mx-4 cursor-pointer my-2 text-lg">{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <FcDataEncryption fontSize={40} className="w-32 text-white cursor-pointer"/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#4CA1AF] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2C3E50]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu
          ? <ul
              className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-gray-200 text-white animate-slide-in"
            >
              <li className="text-xl w-full my-2">
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              </li>
              {["Market", "Exchange", "Tutorials", "Wallets"].map(
                (item, index) => <NavBarItem key={item + index} title={item} />,
              )}
            </ul>
          : <HiMenu fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />}
      </div>
    </nav>
  );
};

export default Navbar;