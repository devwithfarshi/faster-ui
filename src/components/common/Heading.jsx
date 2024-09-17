"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const Heading = ({ text }) => {
  const headingRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const letters = headingRef.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [inView]);

  return (
    <h2
      ref={(node) => {
        headingRef.current = node;
        ref(node);
      }}
      className="font-raleway font-bold text-4xl lg:text-6xl"
    >
      {text.split("").map((letter, index) => (
        <span key={index} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </h2>
  );
};

export default Heading;
