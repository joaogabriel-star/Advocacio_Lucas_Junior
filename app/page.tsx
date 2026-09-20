import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import PracticeAreas from "@/components/sections/PracticeAreas";
import About from "@/components/sections/About";
import BookingSection from "@/components/sections/BookingSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Article from "@/components/sections/Article";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PracticeAreas />
      <About />
      <BookingSection />
      <HowItWorks />
      <Article />
      <FAQ />
      <Footer />
    </main>
  );
}
