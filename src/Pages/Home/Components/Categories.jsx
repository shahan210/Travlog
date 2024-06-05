import React from "react";
import Guide from "../../../assets/PNG/destination 1.png";
import Weather from "../../../assets/PNG/cloudy 1.png";
import EasyBooking from "../../../assets/PNG/booking 1.png";
import Cards from "./Cards";
const Categories = () => {
  return (
    <section className="w-full grid grid-cols-4 my-14 p-2 gap-2 overflow-auto">
      <div className="flex flex-col gap-3 justify-center w-fit items-center my-14">
        <p className="text-2xl w-full text-left tracking-widest uppercase font-bold text-[#F85E9F]">Services</p>
        <div className="text-4xl font-bold text-balck flex flex-col leading-normal">
          <p>Our top value</p>
          <p>categories</p>
          <p>for you</p>
        </div>
      </div>
      <div className=" col-span-3 mt-14 flex gap-7 flex-nowrap overflow-visible">
        <Cards
          Image={Guide}
          Title={"Best Tour Guide"}
          Desc={"What looked like a small patch of purple grass, above five feet."}
        />
        <Cards
          Image={EasyBooking}
          Title={"Easy Booking"}
          Desc={"Square, was moving across the sand in their direction."}
        />
        <Cards
          Image={Weather}
          Title={"Weather Forecast"}
          Desc={"What looked like a small patch of purple grass, above five feet."}
        />{" "}
      </div>
    </section>
  );
};

export default Categories;
