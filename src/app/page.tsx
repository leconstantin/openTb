import AllHotels from "@/features/home/AllHotels";
import Hero from "@/features/home/hero";
import MenuList from "@/features/home/MenuList";
import SearchTab from "@/features/home/SearchTab";
import SubHero from "@/features/home/subHero";

export default function Home() {
  return (
    <main>
      <div className="hidden md:flex">
        <Hero />
      </div>
      <SubHero />
      <SearchTab />
      <MenuList />
      <AllHotels />
    </main>
  );
}
