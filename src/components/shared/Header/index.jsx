"use client";
import Container from "@/components/common/Container";
import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";
const Header = () => {
  const largeNavigationUl = useRef(null);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!largeNavigationUl?.current) return;
    const handleLargeNavigationStyle = () => {
      largeNavigationUl.current.classList.toggle("border");
      largeNavigationUl.current.classList.toggle("border-white");
      largeNavigationUl.current.classList.toggle("bg-white/60");
    };
    handleLargeNavigationStyle();
  }, [stickyNav]);
  return (
    <header
      className={`h-[68px] bg-transparent flex items-center fixed  left-0 duration-300 transition-all  w-full z-40 ${
        stickyNav
          ? " border-b shadow-xl border-b-white bg-white/80 backdrop-blur-md top-0"
          : "top-4"
      } `}
    >
      <Container className="w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <figure className="w-[150px] h-[35px] xl:w-[170px] xl:h-[37.29px] relative">
            <Link href={"/"}>
              <Image src="/logo.svg" alt="Logo" fill />
            </Link>
          </figure>
          <Navigation largeNavigationUl={largeNavigationUl} />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
};
export default Header;
