import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { portfolioProjects } from "@/data/portfolio.data";
import Image from "next/image";

const PortfolioSlider = ({ sliderRef }) => {
  return (
    <div className="mt-8 lg:mt-[57px]">
      <Swiper
        ref={sliderRef}
        spaceBetween={32}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          1024: {
            spaceBetween: 32 + 34 * 6,
            slidesPerView: 2,
            centeredSlides: true,
          },
          1600: {
            spaceBetween: 32 + 34 * 2,
            slidesPerView: 2.4,
            centeredSlides: true,
          },
        }}
      >
        {portfolioProjects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="h-[300px] lg:h-[618px] lg:w-[800px] bg-white/50 border border-white rounded-10 p-4 lg:p-[34px]">
              <figure className="relative h-full w-full">
                <a href={project.url}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover lg:object-contain"
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
