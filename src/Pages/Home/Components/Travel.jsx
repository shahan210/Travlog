import React from "react";
import TravelPic from "../../../assets/PNG/Group 9238.png";
import TravelTag from "../../../assets/PNG/Frame 50.png";
import { motion } from "framer-motion";
const Travel = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0, scale: 1 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="my-20 p-2"
    >
      <div className="grid grid-cols-3 relative">
        <div className="col-span-2 overflow-visible">
          <img src={TravelPic} alt="" className="w-[1100px] h-[700px] ml-[-120px]" />
        </div>
        <div className="p-2 flex flex-col gap-4 relative">
          <p className="sideheading">Travel Point</p>
          <div className="sideDesc">
            <p>We helping you find your dream location</p>
          </div>
          <p className="text-gray-500">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC.
          </p>
          <div className="absolute top-[30%] right-[-27%] ">
            <img src={TravelTag} alt="" className=" cursor-pointer" />
          </div>
          <div className="flex gap-4 flex-wrap my-20">
            <div className="p-2 flex flex-col gap-2 justify-center items-center w-[170px] h-[120px] border border-gray-200 rounded-3xl">
              <p className="text-2xl font-semibold text-[#ff5722]">500+</p>
              <p>Holiday Package</p>
            </div>
            <div className="p-2 flex flex-col gap-2 justify-center items-center w-[170px] h-[120px] border border-gray-200 rounded-3xl">
              <p className="text-2xl font-semibold text-[#ff5722]">100</p>
              <p>Luxury Hotel</p>
            </div>
            <div className="p-2 flex flex-col gap-2 justify-center items-center w-[170px] h-[120px] border border-gray-200 rounded-3xl">
              <p className="text-2xl font-semibold text-[#ff5722]">7</p>
              <p>Premium Airlines</p>
            </div>
            <div className="p-2 flex flex-col gap-2 justify-center items-center w-[170px] h-[120px] border border-gray-200 rounded-3xl">
              <p className="text-2xl font-semibold text-[#ff5722]">2k+</p>
              <p>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Travel;
