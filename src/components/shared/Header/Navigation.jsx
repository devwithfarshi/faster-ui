"use client";
import Button from "@/components/common/Button";
import { routeHeaderData } from "@/data/route.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const pathName = usePathname();
  const isActive = (path) => pathName === path;
  return (
    <>
      <ul className="hidden w-[499px] lg:flex justify-center items-center gap-12 rounded-[20px] border border-white bg-white/60 h-full ">
        {routeHeaderData.map((item) => (
          <li key={item.id}>
            <Link
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
      </ul>
      <div className="hidden lg:flex items-center gap-[19px]">
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
            className="w-[100px] lg:w-[132px] py-3"
          />
        </Link>
      </div>
    </>
  );
};
export default Navigation;
