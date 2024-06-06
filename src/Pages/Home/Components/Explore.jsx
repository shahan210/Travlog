import React from "react";
import Planes from "../../../assets/PNG/Group 1.png";
import Case from "../../../assets/PNG/Suitcase.png";
import Play from "../../../assets/PNG/Play.png";
import Button from "../../../Global/Components/Button";
import { motion } from "framer-motion";
const Explore = () => {
  return (
    <section className="lg:grid lg:grid-cols-3 flex flex-col-reverse sm:gap-2 lg:gap-10 h-fit">
      <motion.div
        initial={{ x: 100, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-col flex sm:gap-5 lg:gap-10 lg:mt-10 ml-5 sm:justify-center sm:items-center"
      >
        <Button className="animation Explore">
          <p>Explore the world</p>
          <img src={Case} alt="Explore the world" />
        </Button>
        <div>
          <h1 className="sm:text-5xl text-center lg:text-4xl xl:text-6xl sm:leading-[60px] lg:leading-[80px] font-bold">
            Travel <span className=" text-[#F85E9F]">top destination</span> of the world
          </h1>
        </div>
        <div className="text-slate-500 text-sm lg:text-lg sm:leading-5 lg:leading-8 flex flex-col">
          <p>We always make our cutomer happy by</p>
          <p>providing</p>
          <p>as many choices as possible </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button className="animation purpleButton shadow-sm lg:text-sm hover:shadow-md !w-[150px]">
            Get Started
          </Button>
          <Button className="animation logIn !w-[180px] items-center lg:text-sm shadow-sm hover:shadow-md !font-bold !p-4 flex justify-center border border-gray-100 gap-2">
            <img src={Play} alt="Watch Demo" />
            <p>Watch Demo</p>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="col-span-2 ml-10"
      >
        <img src={Planes} alt="grid" className="w-fit " />
      </motion.div>
    </section>
  );
};

export default Explore;
