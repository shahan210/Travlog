import React from "react";
import Planes from "../../../assets/PNG/Group 1.png";
import Case from "../../../assets/PNG/Suitcase.png";
import Play from "../../../assets/PNG/Play.png";
import Button from "../../../Global/Components/Button";
import { motion } from "framer-motion";
const Explore = () => {
  return (
    <section className="lg:grid lg:grid-cols-3 flex flex-col-reverse sm:gap-2 lg:gap-10  h-fit my-10">
      <motion.div
        initial={{ x: 100, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-col flex gap-5 lg:gap-10 lg:mt-10 ml-5 justify-center items-center"
      >
        <Button className="animation Explore">
          <p className="font-bold text-xs sm:text-base">Explore the world!</p>
          <img src={Case} alt="Explore the world" />
        </Button>
        <div>
          <h1 className="discoverTitle">
            Travel <span className=" text-[#F85E9F]">top destination</span> of the world
          </h1>
        </div>
        <div className="discDesc">
          <p className="hidden lg:block">We always make our cutomer happy by</p>
          <p className="hidden lg:block">providing</p>
          <p className="hidden lg:block">as many choices as possible </p>
          <p className="lg:hidden text-center text-wrap">
            We always make our cutomer happy by providing as many choices as possible
          </p>
        </div>
        <div className="discOptions">
          <Button className="discStart">Get Started</Button>
          <Button className="discWatch">
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
