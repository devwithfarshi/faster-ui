import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Link from "next/link";
import BannerBg from "./BannerBg";

const Banner = () => {
  return (
    <section className="pt-28 lg:pt-0 relative lg:h-[645px] flex items-center justify-center">
      <div className="rotate-[46.19deg] hidden lg:block">
        <BannerBg />
      </div>
      <div className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full">
        <Container>
          <div className="md:max-w-[600px] xl:max-w-[764px] mx-auto text-center space-y-9 w-full">
            <h1 className="font-raleway font-bold text-4xl leading-tight md:text-6xl md:leading-tight xl:text-[73.34px] xl:leading-tight">
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
