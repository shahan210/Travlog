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
import Features from "./Components/Features";

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
          className="SecondSectionDiv"
        >
          <img src={Trip} className=" brandImage" alt="Tripadvisor" />
          <img src={Expedia} className=" brandImage" alt="Expedia" />
          <img src={Booking} className=" brandImage" alt="Booking" />
          <img src={Airbnb} className=" brandImage" alt="Airbnb" />
          <img src={Rbitz} className=" brandImage" alt="Rbitz" />
        </motion.section>
        {/* Third Section */}
        <Categories />
        {/* Fourth Section */}
        <Destination />
        {/* Fifth Section */}
        <Travel />
        {/* Sixth Section */}
        <Features />
      </div>
    </Layout>
  );
};

export default Index;
