import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { siteConfig } from "@/config/site";
import Hero from "@/features/layout/hero";
import HeaderTop from "@/features/layout/HeaderTop";
import SearchTab from "@/features/layout/SearchTab";
import MenuList from "@/features/layout/MenuList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="[color-scheme:light]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <header>
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
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
