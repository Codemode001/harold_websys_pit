"use client";
import styled from "@emotion/styled";
import { Fade } from "react-awesome-reveal";

import Header from "@/components/Header";
import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Updates from "@/components/Updates";
import Media from "@/components/Media";
import PresidentCorner from "@/components/PresidentCorner";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import Survey from "@/components/Survey";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Header />
      <HeaderNav />
      <Hero />
      <About />
      <Updates />
      <Media />
      <Fade>
        <PresidentCorner />
      </Fade>
      <ProfessionalSummary />
      <Survey />
      <Footer />
      <StayBottom>
        <a href="https://haroldcreative.netlify.app/" target="_blank">
          View My Existing Portfolio
        </a>
      </StayBottom>
    </main>
  );
}

const StayBottom = styled.button`
  background-color: var(--ustp-bg);
  position: fixed;
  bottom: 0;
  right: 0;
  width: 15rem;
  height: 2.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  color: var(--ustp-yellow);
`;
