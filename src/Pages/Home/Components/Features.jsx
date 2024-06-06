import { motion } from "framer-motion";
import React from "react";
import Location from "../../../assets/PNG/Group 9239.png";
import Calender from "../../../assets/PNG/Group 9239 (1).png";
import Coupon from "../../../assets/PNG/Group 9239 (2).png";
import Back from "../../../assets/PNG/BACKGROUND.png";
const Features = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0, scale: 1 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="my-20"
    >
      <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse">
        <div className="p-2 flex flex-col gap-14 ">
          <div className="flex flex-col gap-4">
            <p className="sideheading">Key features</p>
            <div className="sideDesc">
              <p>We offer best services</p>
            </div>
            <p className="text-gray-500 text-center">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC.
            </p>
          </div>
          <div className="flex gap-2 flex-col lg:items-end">
            <div className="Travel-box">
              <img src={Location} alt="Location" className="w-[90px]" />
              <div>
                <p className="font-semibold text-xl ">We offer best services</p>
                <p className="text-center">Lorem Ipsum is not simply random text</p>
              </div>
            </div>
            <div className="Travel-box  border border-gray-200 rounded-3xl">
              <img src={Calender} alt="Location" className="w-[90px]" />
              <div>
                <p className="font-semibold text-xl">Schedule your trip</p>
                <p>It has roots in a piece of classical</p>
              </div>
            </div>
            <div className="Travel-box">
              <img src={Coupon} alt="Location" className="w-[90px]" />
              <div>
                <p className="font-semibold text-xl">Get discounted coupons</p>
                <p>Lorem Ipsum is not simply random text</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={Back} alt="Surfing" />
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
