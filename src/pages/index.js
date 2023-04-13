import Head from "next/head";

import Header from "@/components/Utils/Header";
import Hero from "@/components/Home/Hero";
import GoodBye from "@/components/Home/GoodBye";
import Footer from "@/components/Utils/Footer";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";

export default function Home() {
  return (
    <div className="bg-[#111217] text-white z-0">
      <Head>
        <title>AptoStake</title>
        <meta
          name="description"
          content="Hackathon project for Greenpill Hackathon"
        />
      </Head>

      <Header />

      <section id="hero" className="flex w-full justify-center items-center">
        <Hero />
      </section>

      <section id="about">
        <About  />
      </section>

      <section id='features'>
        <Features />
      </section>

      <section id="goodbye">
        <GoodBye />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
