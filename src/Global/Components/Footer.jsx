import React from "react";
import Logo from "../../assets/PNG/Vector.png";
import Facebook from "../../assets/PNG/facebook.png";
import Twitter from "../../assets/PNG/Twitter.png";
import Instagram from "../../assets/PNG/Instagram.png";

const Footer = () => {
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
        <div className="grid grid-cols-3 ">
          <div className="flex justify-start flex-col gap-8 p-2 ">
            <h1 className="text-xl font-bold">Company</h1>
            <div>About</div>
            <div>Career</div>
            <div>Mobile</div>
          </div>
          <div className="flex justify-start flex-col gap-8 p-2 ">
            <h1 className="text-xl font-bold">Contact</h1>
            <div>Why Travlog?</div>
            <div>Partner with us</div>
            <div>FAQ’s</div>
            <div>Blog</div>
          </div>
          <div className="flex justify-start flex-col gap-8 p-2 ">
            <h1 className="text-xl font-bold">Meet Us</h1>
            <div>+00 92 1234 56789</div>
            <div>info@travlog.com</div>
            <div className="flex flex-col gap-2">
              <p>205. R Street, New York</p>
              <p>BD23200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
