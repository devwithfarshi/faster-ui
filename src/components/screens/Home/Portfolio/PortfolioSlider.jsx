import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { portfolioProjects } from "@/data/portfolio.data";
import Image from "next/image";

const PortfolioSlider = ({ sliderRef }) => {
  return (
    <div className="mt-[57px]">
      <Swiper
        ref={sliderRef}
        spaceBetween={32 + 34 * 2}
        slidesPerView={2.4}
        loop={true}
      >
        {portfolioProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="h-[618px] w-[800px] bg-white/50 border border-white rounded-10 p-[34px]">
              <figure className="relative h-full w-full">
                <a href={project.url}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </a>
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioSlider;
