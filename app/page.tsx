"use client";
import Header from "@/components/Header";
import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Updates from "@/components/Updates";
import Media from "@/components/Media";
import PresidentCorner from "@/components/PresidentCorner";
import ProfessionalSummary from "@/components/ProfessionalSummary";

export default function Home() {
  return (
    <main>
      <Header />
      <HeaderNav />
      <Hero />
      <About />
      <Updates />
      <Media />
      <PresidentCorner />
      <ProfessionalSummary />
    </main>
  );
}
