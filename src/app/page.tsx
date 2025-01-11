import Hero from "@/features/home/hero";

export default function Home() {
  return (
    <main>
      <div className="hidden md:flex">
        <Hero />
        This top slider image is not visible on small device
      </div>
    </main>
  );
}
