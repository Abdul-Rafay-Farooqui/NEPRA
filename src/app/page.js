"use client";
import Banner from "./components/home/Banner";
import Service from "./components/home/Service";
import Marquee from "./components/home/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Service />
      <Marquee />
    </main>
  );
}
