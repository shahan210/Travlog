import { motion } from "framer-motion";
import React from "react";
import Layout from "../../Global/Layout";
import Trip from "../../assets/PNG/Group.png";
import Rbitz from "../../assets/PNG/Rbitz.png";
import Airbnb from "../../assets/PNG/airbnb.png";
import Booking from "../../assets/PNG/booking.png";
import Expedia from "../../assets/PNG/expedia.png";
import Categories from "./Components/Categories";
import Explore from "./Components/Explore";
import "./Home.css";
import Destination from "./Components/Destination";
import Travel from "./Components/Travel";

const Index = () => {
  return (
    <Layout>
      <div className="w-full mt-10">
        {/* First Section  */}
        <Explore />
        {/* Second Section */}
        <motion.section
          initial={{ y: 100, opacity: 0, scale: 1 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full justify-center items-center flex gap-28 mt-10"
        >
          <img src={Trip} className=" cursor-pointer" alt="Tripadvisor" />
          <img src={Expedia} className=" cursor-pointer" alt="Expedia" />
          <img src={Booking} className=" cursor-pointer" alt="Booking" />
          <img src={Airbnb} className=" cursor-pointer" alt="Airbnb" />
          <img src={Rbitz} className=" cursor-pointer" alt="Rbitz" />
        </motion.section>
        {/* Third Section */}
        <Categories />
        {/* Fourth Section */}
        <Destination />
        {/* Fifth Section */}
        <Travel />
        {/* Sixth Section */}
      </div>
    </Layout>
  );
};

export default Index;
