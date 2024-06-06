import React, { useState } from "react";
import Logo from "../../assets/PNG/Travlog.png";
import Button from "./Button";
import DrawerMenu from "../../assets/PNG/Drawer.png";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <section className="flex justify-center">
      <nav className="container flex justify-between sm:flex-row  flex-row-reverse px-4 py-4 items-center">
        <div className="flex lg:hidden" onClick={() => setDrawer(!drawer)}>
          <img src={DrawerMenu} alt="menu" />
        </div>
        <div className="lg:hidden">
          <div
            className={
              drawer
                ? "w-[250px] bg-[#5d50c6] fixed top-0 left-0 h-full z-50 animation"
                : "fixed z-50 top-0 left-0 h-full w-0 bg-[#5d50c6] animation"
            }
          >
            <div className={drawer ? "visible" : "invisible "}>
              <div className="w-full p-4 justify-end flex" onClick={() => setDrawer(false)}>
                <IoClose className="text-white size-6" />
              </div>
              <div className="flex flex-col p-4 gap-5">
                <p className="text-white cursor-pointer p-2">Home</p>
                <p className="sidebar">Discover</p>
                <p className="sidebar">Special Deals</p>
                <p className="sidebar">Contact</p>
                <p className="sm:hidden sidebar">Log In</p>
                <p className="sm:hidden sidebar">Sign Up</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <img src={Logo} alt="Travlog Logo" className="lg:w-[35px] sm:w-[25px]" />
          <h1 className="text-lg lg:text-2xl font-bold ">Travlog</h1>
        </div>
        <div className="lg:flex hidden text-gray-400 gap-20 text-sm font-bold">
          <p className="text-black lgHover">Home</p>
          <p className="lgHover">Discover</p>
          <p className="lgHover">Special Deals</p>
          <p className="lgHover">Contact</p>
        </div>
        <div className="hidden sm:flex justify-between gap-2">
          <div>
            <Button className="logIn  animation">Log In</Button>
          </div>
          <div>
            <Button className="purpleButton animation">Sign Up</Button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
