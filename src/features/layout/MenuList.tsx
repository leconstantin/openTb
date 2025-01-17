"use client";
import { menuList } from "@/config/home";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCarAlt, FaHotel } from "react-icons/fa";
import { LiaMeetup } from "react-icons/lia";
import { MdTableBar, MdTableRestaurant } from "react-icons/md";
import { TbBrandAirtable } from "react-icons/tb";

function getIcon(icon: string) {
  switch (icon) {
    case "hotel_room":
      return <FaHotel className="size-5" />;
    case "hall_room":
      return <TbBrandAirtable className="size-5" />;
    case "meeting_room":
      return <LiaMeetup className="size-5" />;
    case "restaurant_table":
      return <MdTableBar className="size-5" />;
    case "hotel_table":
      return <MdTableRestaurant className="size-5" />;
    case "transport":
      return <FaCarAlt className="size-5" />;
    default:
      return null;
  }
}

export default function MenuList() {
  const pathname = usePathname();
  return (
    <div className="px-4 md:px-10 py-3 lg:py-6">
      <ul className="flex justify-between items-center max-w-4xl mx-auto">
        {menuList.map((menu) => {
          const icon = getIcon(menu.icon);
          return (
            <li key={menu.id}>
              <Link
                href="/"
                className={cn(
                  "flex flex-col items-center gap-2 text-zinc-500 font-medium text-sm cursor-pointer hover:text-zinc-700 hover:underline hover:underline-offset-8 ease-in-out duration-500 transition-colors hover:shadow-md rounded-xl px-5 py-2 focus:text-zinc-700 focus:underline focus:underline-offset-8 focus:shadow-md",
                  pathname === menu.link_to &&
                    "text-zinc-800 underline underline-offset-8"
                )}
              >
                {icon}
                {menu.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
