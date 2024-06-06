import React from "react";
import { FaStar } from "react-icons/fa6";
const DestinationCards = ({ title, place, rating, Image, price }) => {
  return (
    <div className="w-full flex justify-center sm:mb-0 mb-5">
      <div className="destCard">
        <div className="flex flex-col w-full h-full gap-1 items-center">
          <img src={Image} alt="Best Tour Guide" className=" w-full lg:h-[280px] sm:h-[180px]" />
          <div className="destDetails">
            <div className="col-span-2 flex gap-3 flex-col">
              <p className="destTiltle">{title}</p>
              <p className="destDesc">{place}</p>
              <div className="flex gap-1 items-center text-[#ff5722]">
                <p className="text-lg">{rating}</p>
                <FaStar className="size-5 mb-[2px] " />
              </div>
            </div>
            <div className="h-full flex  ">
              <p className="destPrice">$ {price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCards;
