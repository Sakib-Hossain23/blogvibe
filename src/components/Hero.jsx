import React from "react";
import FeaturedCategories from "./FeaturedCategories";
import Carousel from "./Carousel";
import Banner from "./Banner";
import MenShoes2 from "./MenShoes2";
import Nails from "./Nails";
import HairStyles2 from "./HairStyles2";
import MenClothes2 from "./MenClothes2";

const Hero = () => {
  return (
    <div>
      <Carousel />
      <FeaturedCategories />
      <Nails />
      <HairStyles2 />
      <Banner />
      <MenShoes2 />
      <MenClothes2 />
    </div>
  );
};

export default Hero;
