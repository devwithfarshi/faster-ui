import Container from "@/components/common/Container";
import Para from "@/components/common/Para";
import { routeHeaderData } from "@/data/route.data";
import Image from "next/image";
import Link from "next/link";
const socialIcons = [
  {
    id: 1,
    url: "#",
    icon: "/icons/common/instagram.svg",
  },
  {
    id: 2,
    url: "#",
    icon: "/icons/common/in.svg",
  },
  {
    id: 3,
    url: "#",
    icon: "/icons/common/tiktok.svg",
  },
  {
    id: 4,
    url: "#",
    icon: "/icons/common/dribble.svg",
  },
];
const Footer = () => {
  return (
    <section className="relative pt-[156px] ">
      <footer>
        <Container>
          <div className="bg-white rounded-lg lg:rounded-[40px] p-8 lg:px-[72px] pt-8 lg:pt-[84px] pb-[78px]">
            <figure className="w-[150px] h-[35px] xl:w-[170px] xl:h-[37.29px] relative">
              <Link href={"/"}>
                <Image src="/logo.svg" alt="Logo" fill />
              </Link>
            </figure>
            <div className="mt-[37.98px] flex justify-between items-start flex-col lg:flex-row gap-y-4">
              <div className="max-w-[356px]">
                <Para
                  text={
                    "Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life."
                  }
                />
              </div>
              <ul className="flex items-center gap-4 lg:gap-12 ">
                {routeHeaderData.map((route) => (
                  <li
                    key={route.id}
                    className="text-sm lg:text-base text-paragraph hover:text-foreground"
                  >
                    <Link href={route.path}>{route.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-9 flex justify-between lg:items-end flex-col md:flex-row gap-y-4">
              <div className="flex  items-center gap-[11px]">
                <figure className="shrink-0">
                  <Image
                    src={"/icons/common/heart.svg"}
                    alt="heart"
                    width={24}
                    height={24}
                  />
                </figure>
                <Para text="Made with love powered by inkyy.com" />
              </div>
              <ul className="flex gap-2.5">
                {socialIcons.map((icon) => (
                  <li
                    key={icon.id}
                    className="size-12 bg-background flex items-center justify-center"
                  >
                    <a
                      href={icon.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={icon.icon}
                        alt={icon.icon}
                        width={32}
                        height={32}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </footer>
    </section>
  );
};
export default Footer;
