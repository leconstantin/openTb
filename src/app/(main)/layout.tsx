import HeaderTop from "@/features/layout/HeaderTop";
import Hero from "@/features/layout/hero";
import MenuList from "@/features/layout/MenuList";
import SearchTab from "@/features/layout/SearchTab";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className=" bg-white">
        <div className="hidden md:flex">
          <Hero />
        </div>
        <div className=" min-h-screen">
          <HeaderTop />
          <SearchTab />
          <MenuList />
        </div>
      </header>
      {children}
    </>
  );
}
