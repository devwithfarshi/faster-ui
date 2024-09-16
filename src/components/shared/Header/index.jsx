"use client";
import Container from "@/components/common/Container";
import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";
const Header = () => {
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
  return (
    <header
      className={`h-[68px] bg-transparent flex items-center fixed left-0 duration-300 transition-all  w-full z-40  ${
        stickyNav ? "top-0" : "top-4"
      }`}
    >
      <div
        className={`absolute   bg-white/60 backdrop-blur-md h-full left-1/2 -translate-x-1/2  -z-10 duration-300 ${
          stickyNav
            ? "w-full rounded-none shadow-xl border-b border-b-white"
            : " hidden lg:block w-[499px] rounded-[20px] border border-white shadow-none"
        }`}
      ></div>
      <Container className="w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <figure className="w-[150px] h-[35px] xl:w-[170px] xl:h-[37.29px] relative">
            <Link href={"/"}>
              <Image src="/logo.svg" alt="Logo" fill />
            </Link>
          </figure>
          <Navigation />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
};
export default Header;
