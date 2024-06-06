import React from "react";
import Planes from "../../../assets/PNG/Group 1.png";
import Case from "../../../assets/PNG/Suitcase.png";
import Play from "../../../assets/PNG/Play.png";
import Button from "../../../Global/Components/Button";
import { motion } from "framer-motion";
const Explore = () => {
  return (
    <section className="grid grid-cols-3 gap-10 h-fit">
      <motion.div
        initial={{ x: 100, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-col flex gap-10 mt-10 ml-5"
      >
        <Button className="animation Explore">
          <p>Explore the world</p>
          <img src={Case} alt="Explore the world" />
        </Button>
        <div>
          <h1 className="lg:text-4xl xl:text-6xl leading-[80px] font-bold">
            Travel <span className=" text-[#F85E9F]">top destination</span> of the world
          </h1>
        </div>
        <div className="text-slate-500 text-lg leading-8 flex flex-col">
          <p>We always make our cutomer happy by</p>
          <p>providing</p>
          <p>as many choices as possible </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button className="animation purpleButton shadow-sm lg:text-sm hover:shadow-md !w-[150px]">Get Started</Button>
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
