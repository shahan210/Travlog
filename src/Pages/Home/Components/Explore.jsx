import React from "react";
import Planes from "../../../assets/PNG/Group 1.png";
import Case from "../../../assets/PNG/Suitcase.png";
import Play from "../../../assets/PNG/Play.png";
import Button from "../../../Global/Components/Button";

const Explore = () => {
  return (
    <section className="grid grid-cols-3 gap-10 h-fit">
      <div className="flex-col flex gap-10 mt-10">
        <Button className="animation Explore">
          <p>Explore the world</p>
          <img src={Case} alt="Explore the world" />
        </Button>
        <div>
          <h1 className=" text-6xl leading-[80px] font-bold">
            Travel <span className=" text-[#F85E9F]">top destination</span> of the world
          </h1>
        </div>
        <div className="text-slate-500 text-lg leading-8 flex flex-col">
          <p>We always make our cutomer happy by</p>
          <p>providing</p>
          <p>as many choices as possible </p>
        </div>
        <div className="flex gap-8 items-center">
          <Button className="animation purpleButton shadow-sm hover:shadow-md !w-[150px]">Get Started</Button>
          <Button className="animation logIn !w-[180px] shadow-sm hover:shadow-md !font-bold !p-4 flex justify-center border border-gray-100 gap-2">
            <img src={Play} alt="Watch Demo" />
            <p>Watch Demo</p>
          </Button>
        </div>
      </div>
      <div className="col-span-2">
        <img src={Planes} alt="grid" className="w-fit h-[750px]" />
      </div>
    </section>
  );
};

export default Explore;
