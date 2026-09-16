import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Article from "@/components/Article";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Correspondence from "@/components/Correspondence";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

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
