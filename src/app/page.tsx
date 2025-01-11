import AllHotels from "@/features/home/AllHotels";
import Hero from "@/features/home/hero";
import MenuList from "@/features/home/MenuList";
import SearchTab from "@/features/home/SearchTab";
import HeaderTop from "@/features/home/subHero";

export default function Home() {
  return (
    <main>
      <div className="hidden md:flex">
        <Hero />
      </div>
      <div className=" min-h-screen">
        <HeaderTop />
        <SearchTab />
        <MenuList />
        <AllHotels />
      </div>
    </main>
  );
}
