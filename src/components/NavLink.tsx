import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLink = ({ path, name, variant = "dark" }: NavLinkProps) => {
  const pathname = usePathname();
  const isLight = variant === "light";
  const isActive = path === pathname;

  return (
    <Link href={path} className={cn("group relative transition-colors duration-300", isLight ? "text-white hover:text-gray-300" : "text-gray-600 hover:text-black")}>
      <span className={cn("absolute w-0 group-hover:w-2/3 h-0.5 -top-1 transition-all duration-300 ease-in-out", isLight ? "bg-white" : "bg-black")}></span>
      <span className="font-normal group-hover:font-medium">{name}</span>
      <span className={cn("ml-1 text-base transition-all", isActive ? "text-black" : "text-transparent")}>•</span>
    </Link>
  );
};

export default NavLink;
