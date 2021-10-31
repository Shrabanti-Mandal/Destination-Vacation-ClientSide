import React from "react";

import Banner from "../Banner/Banner";
import CarRent from "../CarRent/CarRent";

import Packages from "../Packages/Packages";

import "./Home.css";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <Packages></Packages>

      <CarRent></CarRent>
    </div>
  );
};

export default Home;
