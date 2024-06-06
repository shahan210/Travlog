import React, { useState } from "react";
import Logo from "../../assets/PNG/Vector.png";
import Facebook from "../../assets/PNG/facebook.png";
import Twitter from "../../assets/PNG/Twitter.png";
import Instagram from "../../assets/PNG/Instagram.png";
import { CiCircleChevDown } from "react-icons/ci";
const Footer = () => {
  const [showOptions, setShowOptions] = useState({
    company: false,
    contact: false,
    meet: false,
  });
  return (
    <div className="flex justify-center mb-[20px]  lg:mb-[50px]">
      <div className="footerDiv">
        <div className="flex justify-start flex-col gap-10 lg:gap-14 p-2">
          <div className="flex gap-2 items-center cursor-pointer">
            <img src={Logo} alt="Travlog Logo" className="w-[30px]" />
            <h1 className="text-xl font-bold ">Travlog</h1>
          </div>
          <h1 className="footerDesc">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC.
          </h1>
          <div className="flex gap-5">
            <img src={Facebook} alt="Facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
          </div>
        </div>
        <div className=" footerHeadDiv">
          <div className="footerHead">
            <div>
              <h1 className="text-xl font-bold  flex justify-between items-center">
                <p>Company</p>
                <CiCircleChevDown
                  className="sm:hidden"
                  onClick={() => setShowOptions({ ...showOptions, company: !showOptions.company })}
                />
              </h1>
              <div className={showOptions.company ? "sm:hidden flex flex-col" : "hidden sm:hidden flex-col"}>
                <p className="p-2 footeropt">About</p>
                <p className="p-2 footeropt">Career</p>
                <p className="p-2 footeropt">Mobile</p>
              </div>
              <div className="hidden sm:flex flex-col gap-8 mt-3">
                <p className="footeropt">About</p>
                <p className="footeropt">Career</p>
                <p className="footeropt">Mobile</p>
              </div>
            </div>
          </div>
          <div className="footerHead">
            <div>
              <h1 className="text-xl font-bold  flex justify-between items-center">
                <p>Contact</p>
                <CiCircleChevDown
                  className="sm:hidden"
                  onClick={() => setShowOptions({ ...showOptions, contact: !showOptions.contact })}
                />
              </h1>
              <div className={showOptions.contact ? "sm:hidden flex flex-col" : "hidden sm:hidden flex-col"}>
                <p className="p-2 footeropt">Why Travlog?</p>
                <p className="p-2 footeropt">Partner with us</p>
                <p className="p-2 footeropt">FAQ’s</p>
                <p className="p-2 footeropt">Blog</p>
              </div>
              <div className="hidden sm:flex flex-col gap-8 mt-3">
                <p className="footeropt">Why Travlog?</p>
                <p className="footeropt">Partner with us</p>
                <p className="footeropt">FAQ’s</p>
                <p className="footeropt">Blog</p>
              </div>
            </div>
          </div>
          <div className="footerHead">
            <div>
            <h1 className="text-xl font-bold  flex justify-between items-center">
                <p>Meet Us</p>
                <CiCircleChevDown
                  className="sm:hidden"
                  onClick={() => setShowOptions({ ...showOptions, meet: !showOptions.meet })}
                />
              </h1>
              <div className={showOptions.meet ? "sm:hidden flex flex-col" : "hidden sm:hidden flex-col"}>
                <p className="p-2 footeropt">+00 92 1234 56789</p>
                <p className="p-2 footeropt">info@travlog.com</p>
                <div className="flex flex-col gap-2">
                  <p className="p-2 footeropt">205. R Street, New York</p>
                  <p className="p-2 footeropt">BD23200</p>
                </div>
              </div>
              <div className="hidden sm:flex flex-col gap-8 mt-3">
                <p className="footeropt">+00 92 1234 56789</p>
                <p className="footeropt">info@travlog.com</p>
                <div className="flex flex-col gap-2">
                  <p className="footeropt">205. R Street, New York</p>
                  <p className="footeropt">BD23200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
