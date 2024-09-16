"use client";
import Button from "@/components/common/Button";
import { gsap } from "gsap";
import SplitText from "split-type";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const BannerHeading = () => {
  const h1Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(h1Ref.current, { type: "lines" });
    const chars = split.chars;

    gsap.from(chars, {
      scale: 0,
      opacity: 0,
      stagger: 0.025,
      duration: 0.5,
      ease: "power1.out",
      delay: 0.5,
    });

    gsap.fromTo(
      buttonRef.current,
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "expo.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <>
      <h1
        ref={h1Ref}
        className="font-raleway font-bold text-4xl leading-tight md:text-6xl md:leading-tight xl:text-[73.34px] xl:leading-tight"
      >
        Awesome UI Dark Template for Webflow Agency
      </h1>
      <Link ref={buttonRef} href="#" className="inline-block">
        <Button text="Get in Touch" />
      </Link>
    </>
  );
};

export default BannerHeading;
