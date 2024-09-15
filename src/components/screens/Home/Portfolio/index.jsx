"use client";
import { useState, useCallback, useRef, useMemo } from "react";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioSlider from "./PortfolioSlider";

const Portfolio = () => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    sliderRef.current?.swiper.slideNext();
  }, []);
  return (
    <section className=" min-h-dvh mt-[130px] bg-[url('/images/portfolio/bg-portfolio-shape.svg')] bg-no-repeat bg-top">
      <PortfolioHeader handlePrev={handlePrev} handleNext={handleNext} />
      <PortfolioSlider sliderRef={sliderRef} />
    </section>
  );
};

export default Portfolio;
