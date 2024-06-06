import React from "react";
import Button from "../../../Global/Components/Button";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";
import DestinationCards from "./DestinationCards";
import Beach from "../../../assets/PNG/Rectangle 6.png";
import Fish from "../../../assets/PNG/Fish.png";
import Mount from "../../../assets/PNG/Mountains.png";
import { motion } from "framer-motion";

const Destination = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0, scale: 1 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="my-20 p-2"
    >
      <div className="destDiv">
        <div className="flex flex-col gap-2">
          <p className="sideheading">Top Destination</p>
          <div className="sideDesc">
            <p>Explore top destination</p>
          </div>
        </div>
        <div className="destOptions">
          <div className="relative">
            <Button className="destButtonNone"></Button>
            <div className="absolute top-[30px] right-[28px]">
              <TiArrowLeft className="text-black size-6" />
            </div>
          </div>
          <div className="relative">
            <Button className="destButton"></Button>
            <div className="absolute top-[30px] right-[28px]">
              <TiArrowRight className="text-white size-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="destCardDiv">
        <DestinationCards
          Image={Beach}
          title="Paradise Beach, Bantayan Island"
          place="Rome, Italy"
          rating={4.8}
          price={550.16}
        />
        <DestinationCards Image={Fish} title="Ocean with full of Colors" place="Maldives" rating={4.5} price={20.99} />
        <DestinationCards
          Image={Mount}
          title="Mountain View, Above the cloud"
          place="United Arab Emirates"
          rating={5.0}
          price={150.99}
        />
      </div>
    </motion.section>
  );
};

export default Destination;
