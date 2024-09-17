"use client"; // For client-side rendering in Next.js

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";
import Para from "@/components/common/Para";
import Image from "next/image";
import { services } from "@/data/services.data";

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const setRefs = (el) => {
    cardRef.current = el;
    inViewRef(el);
  };

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [inView]);

  const extraStyle =
    service?.col === 2
      ? "col-span-2 md:order-last lg:order-[unset]"
      : service?.row === 2
      ? "row-span-2"
      : "";

  return (
    <div
      ref={setRefs}
      className={`bg-white border border-background pl-6 pt-[29px] pr-[23px] pb-[34px] rounded-10 ${extraStyle} ${
        (service?.col || service?.row) && service?.col
          ? "md:flex flex-col md:flex-row items-center justify-between gap-3"
          : "md:flex flex-col md:gap-10"
      } ${services.at(-1).id === service.id && "lg:col-span-2 xl:col-span-1"}`}
    >
      <div>
        <figure className="size-11 rounded-[9px] bg-background flex items-center justify-center">
          <Image
            width={24}
            height={24}
            src={service.icon}
            alt={service.title}
          />
        </figure>
        <div className="mt-[18px]">
          <h4 className="font-semibold text-[19.77px]">{service.title}</h4>
        </div>
        <div className="mt-[19px] max-w-[231px]">
          <Para text={service.description} />
        </div>
      </div>
      {service?.image && (
        <div
          className={`h-full ${
            service?.col === 2 && "md:max-w-[238px] flex-1"
          }`}
        >
          <figure className="relative w-full h-full">
            <Image
              fill
              src={service.image}
              alt={service.title}
              className="object-cover"
            />
          </figure>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
