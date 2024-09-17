"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";

const FadeUpAnimation = ({ children, delay = 0 }) => {
  const elementRef = useRef(null);
  const [rootMargin, setRootMargin] = useState("-200px");
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setRootMargin("-75px");
    }
  }, []);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin,
  });

  useEffect(() => {
    if (inView) {
      gsap.to(elementRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: delay,
      });
    }
  }, [inView, delay]);

  return (
    <div
      ref={(el) => {
        ref(el);
        elementRef.current = el;
      }}
      style={{ opacity: 0, transform: "translateY(20px)" }}
    >
      {children}
    </div>
  );
};

export default FadeUpAnimation;
