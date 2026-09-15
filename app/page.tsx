import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PracticeAreas />
      <HowItWorks />
      <About />
      <BookingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
