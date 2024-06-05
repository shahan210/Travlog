import React from "react";
import Logo from '../../assets/PNG/Vector.png'
const Navbar = () => {
  return (
    <section className="flex justify-center">
      <nav className="container flex justify-between max-w-[1200px] px-4 py-8 items-center">
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
            <button className="bg-white font-semibold hover:bg-gray-100 transition-all ease-in-out duration-150 text-black w-[120px] rounded-3xl p-3">
              Log In
            </button>
          </div>
          <div>
            <button className="bg-[#5d50c6] font-semibold hover:bg-[#6b5dd6] transition-all ease-in-out duration-150 text-white w-[120px] rounded-3xl p-3">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
