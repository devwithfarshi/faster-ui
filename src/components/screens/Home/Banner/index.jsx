import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <section className="relative h-screen pt-[58px] lg:pt-[168px] bg-[url('/images/banner-bg.svg')] bg-contain bg-no-repeat bg-center">
      <Container>
        <div className="max-w-[764px] mx-auto text-center space-y-9">
          <h1 className="font-bold text-[73.34px] leading-tight">
            Awesome UI Dark Template for Webflow Agency
          </h1>
          <Link href="#" className="inline-block">
            <Button text="Get in Touch" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default Banner;
