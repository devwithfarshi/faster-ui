import Container from "@/components/common/Container";

import Image from "next/image";
import Navigation from "./Navigation";
import Link from "next/link";
import Button from "@/components/common/Button";

const Header = () => {
  return (
    <header className="h-[68px] bg-transparent flex items-center fixed left-0 top-4 w-full z-40">
      <Container className="w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <figure>
            <Image src="/logo.svg" alt="Logo" width={170} height={37.29} />
          </figure>
          <Navigation />
          <div className="flex items-center gap-[19px]">
            <Link
              href="#"
              className="text-base text-paragraph hover:text-foreground"
            >
              Sign In
            </Link>
            <Link href="#">
              <Button
                text="Sign up"
                variant="primary"
                className="w-[132px] py-3"
              />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
