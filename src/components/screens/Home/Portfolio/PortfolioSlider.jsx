import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1367: {
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
            <div className="h-[300px] md:h-[400px] md:w-4/5 md:mx-auto lg:w-auto lg:mx-0  xl:h-[618px] 2xl:w-[800px] bg-white/50 border border-white rounded-10 p-4 lg:p-[34px]">
              <figure className="relative h-full w-full">
                <a href={project.url}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
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
