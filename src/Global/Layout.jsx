import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1300px]">
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
