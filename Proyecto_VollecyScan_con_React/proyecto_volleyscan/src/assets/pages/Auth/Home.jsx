import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Results from "../../components/Results";
import Tech from "../../components/Tech";
import Pricing from "../../components/Pricing";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="dashboard-page-container">
      <Navbar />
      
      <section id="inicio">
        <Hero />
      </section>

      <section id="results">
        <Results />
      </section>

      <section id="tech">
        <Tech />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <Footer />

    </div>
  );
}