
import Hero from "./components/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import Experience from "./sections/Experience";
import Trainers from "./sections/Trainers";
import Testimonials from "./sections/testimonials";
import JoinNow from "./sections/JoinNow";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      
      <WhyChooseUs />
      <Experience />
      <Trainers />
      <Testimonials />
      <JoinNow />
      <Footer />
    </main>
  );
}
