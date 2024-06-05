import React from "react";
import Logo from "../../assets/PNG/Vector.png";
import Button from "./Button";
const Navbar = () => {
  return (
    <section className="flex justify-center">
      <nav className="container flex justify-between  px-4 py-8 items-center">
        <div className="flex gap-2 items-center cursor-pointer">
          <img src={Logo} alt="Travlog Logo" className="w-[35px]" />
          <h1 className="text-2xl font-bold ">Travlog</h1>
        </div>
        <div className="flex text-gray-400 gap-20 text-sm font-bold">
          <p className="text-black cursor-pointer">Home</p>
          <p className="cursor-pointer">Discover</p>
          <p className="cursor-pointer">Special Deals</p>
          <p className="cursor-pointer">Contact</p>
        </div>
        <div className="flex justify-between gap-2">
          <div>
            <Button className="logIn animation">Log In</Button>
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
