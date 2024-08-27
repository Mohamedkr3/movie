import React from "react";
import { MoviesSlider } from "../MoviesSlider/MoviesSlider";
import { TvSlider } from "../TvSlider/TvSlider";
import { Countup } from "./Countup/Countup";

import { Application } from "./Appliction/Application";
import { Header } from "./Header/Header";
import { HowWork } from "./HowWork/HowWork";
import { JoinUs } from "./JoinUS/JoinUs";
import { Devices } from "./Devices/Devices";

export const Home = () => {
  return (
    <>
      <Header />
      <Devices />
      <MoviesSlider />
      <HowWork />
      <Countup />
      <TvSlider />
      <Application />
      <JoinUs />
    </>
  );
};
