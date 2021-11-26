import React from "react";
import Slider from "./Slider/Slider";
import Nevigation from "./Nevigation/Nevigation";

const Header = () => {
  return (
    <div>
       <h2 className="text-center bg-warning fw-bold p-1">Welcome To Toure</h2>
      <Nevigation></Nevigation>
      <Slider></Slider>
    </div>
  );
};

export default Header;
