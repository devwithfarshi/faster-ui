import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
import BannerBg from "./BannerBg";

const Banner = () => {
  return (
    <section className="relative h-[645px] flex items-center justify-center">
      <div className="rotate-[46.19deg]">
        <BannerBg />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Container>
          <div className="max-w-[764px] mx-auto text-center space-y-9">
            <h1 className="font-raleway font-bold text-[73.34px] leading-tight">
              Awesome UI Dark Template for Webflow Agency
            </h1>
            <Link href="#" className="inline-block">
              <Button text="Get in Touch" />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Banner;
