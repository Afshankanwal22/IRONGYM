import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import Experience from "./sections/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Experience />
      <Footer />
    </main>
  );
}
