"use client";
import { routeHeaderData } from "@/data/route.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navigation = () => {
  const pathName = usePathname();
  const isActive = (path) => pathName === path;
  return (
    <ul className="w-[499px] flex justify-center items-center gap-12 rounded-[20px] border border-white bg-white/60 h-full ">
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
  );
};
export default Navigation;
