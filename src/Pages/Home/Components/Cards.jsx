import React from "react";

const Cards = ({ Image, Title, Desc }) => {
  return (
    <div className="CCard">
      <div className="flex flex-col justify-center gap-4 items-center">
        <img src={Image} alt="Best Tour Guide" className="my-8" />
        <p className=" text-3xl text-black font-semibold my-2">{Title}</p>
        <p className=" text-base text-wrap text-center px-4 text-gray-500  my-2">{Desc} </p>
      </div>
    </div>
  );
};

export default Cards;
