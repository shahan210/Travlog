import React from "react";
import { FaStar } from "react-icons/fa6";
const DestinationCards = ({ title, place, rating, Image }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="destCard">
        <div className="flex flex-col w-full h-full gap-1 items-center">
          <img src={Image} alt="Best Tour Guide" className=" w-full h-[280px]" />
          <div className="grid grid-cols-3 w-full p-4">
            <div className="col-span-2 flex gap-3 flex-col">
              <p className="text-black font-semibold text-xl">{title}</p>
              <p className="text-gray-500  text-base">{place}</p>
              <div className="flex gap-1 items-center text-[#ff5722]">
                <p className="text-lg">{rating}</p>
                <FaStar className="size-5 mb-[2px] " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCards;
