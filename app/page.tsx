import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import PracticeAreas from "@/components/sections/PracticeAreas";
import Article from "@/components/sections/Article";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import Correspondence from "@/components/sections/Correspondence";
import BookingSection from "@/components/sections/BookingSection";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PracticeAreas />
      <About />
      <Article />
      <HowItWorks />
      <Correspondence />
      <BookingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
