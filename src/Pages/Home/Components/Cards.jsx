import React from "react";

const Cards = ({ Image, Title, Desc, ...rest }) => {
  return (
    <div className="CCard" {...rest}>
      <div className="flex flex-col justify-center gap-4 items-center">
        <img src={Image} alt="Best Tour Guide" className="my-8" />
        <p className=" CCardTitle">{Title}</p>
        <p className=" CCardDesc">{Desc} </p>
      </div>
    </div>
  );
};

export default Cards;
