"use client";
import Image from "next/image";
import { routeHeaderData } from "@/data/route.data";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
const MobileNav = () => {
  const pathName = usePathname();
  const isActive = (path) => pathName === path;
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen((pre) => !pre);
    window.document
      .getElementById("app")
      .classList.toggle("-translate-x-[60%]");
    window.document.body.classList.toggle("overflow-hidden");
  };
  return (
    <div className="lg:hidden">
      <button onClick={handleMenuToggle}>
        <Image
          width={36}
          height={36}
          src="/icons/common/menu.svg"
          alt="Menu "
        />
      </button>
      <div
        onClick={(e) => {
          if (e.target.classList.contains("menuOverLay")) {
            handleMenuToggle();
          }
        }}
        className={`menuOverLay fixed  top-0 left-0 w-screen h-screen bg-black/50 backdrop-blur-sm  duration-500 ${
          menuOpen ? "z-30 opacity-100 visible" : "z-0 opacity-0 invisible"
        }`}
      >
        <div
          className={`border border-white bg-background pt-16 duration-300 px-4 h-full w-4/5 absolute top-0 z-40 ${
            menuOpen ? "right-0" : "right-[-100vw]"
          }`}
        >
          <div className="flex items-center justify-between ">
            <figure className="w-[140px] h-[30px] relative">
              <Link href={"/"}>
                <Image src="/logo.svg" alt="Logo" fill />
              </Link>
            </figure>
            <button
              className="z-40 absolute right-4 top-5"
              onClick={handleMenuToggle}
            >
              <Image
                width={36}
                height={36}
                src="/icons/common/cross.svg"
                alt="cross "
              />
            </button>
          </div>
          <ul className="pt-12 flex flex-col gap-3 ">
            {routeHeaderData.map((item) => (
              <li key={item.id}>
                <Link
                  onClick={handleMenuToggle}
                  href={item.path}
                  className={`hover:text-foreground  ${
                    isActive(item.path)
                      ? "font-bold text-foreground"
                      : "text-paragraph"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>{" "}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
