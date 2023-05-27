import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import DailyKitchenSujit from "../HomePageSujit/DailyKitchenSujit/DailyKitchenSujit";
import Footer from "../HomePageSujit/FooterSujit/FooterSujit";
import HealthAndPersonalSujit from "../HomePageSujit/HealthAndPersonalSujit/HealthAndPersonalSujit";
import HomeAndCleaningSujit from "../HomePageSujit/HomeAndCleaningSujit/HomeAndCleaningSujit";
import { JioSImPosterSujit } from "../HomePageSujit/PosterSujit/JioSimPosterSujit";
import PosterSujit from "../HomePageSujit/PosterSujit/PosterSujit";
import ShopFromCategorySujit from "../HomePageSujit/ShopFromCategorySujit/ShopFromCategorySujit";
import SliderCleaningThreeSujit from "../HomePageSujit/SliderSujit/SliderCleaningThreeSujit";
import SliderMedicalThreeSujit from "../HomePageSujit/SliderSujit/SliderMedicalThreeSujit";
import SliderMobileThreeSujit from "../HomePageSujit/SliderSujit/SliderMobileThreeSujit";
import HomeCarousel from "../HomePageSujit/SliderSujit/SliderTwoSujit";
import SliderHomeSujit from "../HomePageSujit/SliderSujit/SliderSujit";
import TreandingBrandSujit from "../HomePageSujit/TreandingBrand/TreandingBrandSujit";

const Homepage = () => {
  return (
    <div>
      <Box>
        <Link to="/electronics">
          <SliderHomeSujit />
        </Link>
        <Link to="/electronics">
          {" "}
          <PosterSujit />
        </Link>
        <Link to="/electronics">
          {" "}
          <HomeCarousel />
        </Link>
        <Link to="/electronics">
          {" "}
          <JioSImPosterSujit />
        </Link>

        <Link to="/fashion">
          <TreandingBrandSujit />
        </Link>
        <Link to="/grocery">
          {" "}
          <ShopFromCategorySujit />
        </Link>
        <Link to="/grocery">
          <HomeAndCleaningSujit />
        </Link>
        <Link to="/grocery">
          {" "}
          <SliderCleaningThreeSujit />
        </Link>
        <Link to="/grocery">
          {" "}
          <HealthAndPersonalSujit />
        </Link>
        <Link to="/grocery">
          <SliderMedicalThreeSujit />
        </Link>
        <Link to="/electronics">
          <SliderMobileThreeSujit />
        </Link>
        <Link to="/">
          {" "}
          <DailyKitchenSujit />
        </Link>
      </Box>
    </div>
  );
};

export default Homepage;
