import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="sm:max-w-[650px] lg:max-w-[1000px] xl:max-w-[1300px]">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
