import Container from "@/components/common/Container";

import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="h-[68px] bg-transparent flex items-center absolute left-0 top-4 w-full z-40 ">
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
