"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BottomToTop = () => {
  const [isShow, setIsShow] = useState(false);

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      setIsShow(scrollTop > clientHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed right-6 flex gap-3 items-center flex-col z-50 duration-300 rounded-full ${
        isShow ? "bottom-6" : "opacity-0 invisible bottom-0"
      }`}
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
      }}
    >
      <button
        onClick={handleClick}
        className="bg-primary size-12 rounded-full flex items-center justify-center text-white shadow-xl -rotate-90"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12L19 12M19 12L16 9M19 12L16 15"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
export default BottomToTop;
