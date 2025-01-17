import HeaderTop from "@/features/layout/HeaderTop";
import Hero from "@/features/layout/hero";
import MenuList from "@/features/layout/MenuList";
import SearchTab from "@/features/layout/SearchTab";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="relative bg-white">
        <div className="hidden md:flex">
          <Hero />
        </div>
      </header>
      <main className="relative">
        <div className="sticky top-0 bg-white">
          <HeaderTop />
          <SearchTab />
          <MenuList />
        </div>
        {children}
      </main>
    </>
  );
}
