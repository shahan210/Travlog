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
      <div className="lg:grid lg:grid-cols-3 flex flex-col relative">
        <div className="lg:col-span-2 overflow-visible lg:m-0 mb-5">
          <img src={TravelPic} alt="" className="w-[1100px] lg:h-[600px] xl:h-[700px] lg:ml-[-120px] " />
        </div>
        <div className="p-2 flex flex-col  gap-4 relative">
          <p className="sideheading">Travel Point</p>
          <div className="sideDesc">
            <p>We helping you find your dream location</p>
          </div>
          <p className="text-gray-500 text-center">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC.
          </p>
          <div className="absolute lg:top-[30%] lg:right-[-6%] xl:top-[30%] xl:right-[-27%] ">
            <img src={TravelTag} alt="" className=" cursor-pointer lg:w-[220px] xl:w-fit lg:block hidden" />
          </div>
          <div className="flex gap-4 flex-wrap my-20">
            <div className="travelBox">
              <p className="travelBox-head">500+</p>
              <p className="tracelBox-dec">Holiday Package</p>
            </div>
            <div className="travelBox">
              <p className="travelBox-head">100</p>
              <p className="tracelBox-dec">Luxury Hotel</p>
            </div>
            <div className="travelBox">
              <p className="travelBox-head">7</p>
              <p className="tracelBox-dec">Premium Airlines</p>
            </div>
            <div className="travelBox">
              <p className="travelBox-head">2k+</p>
              <p className="tracelBox-dec">Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Travel;
