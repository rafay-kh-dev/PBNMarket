import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { BentoFeatures } from "./components/BentoFeatures";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="rounded-[20px] bg-white overflow-hidden">
      <Header />
      <Hero />
      <About />
      <BentoFeatures />
      <Services />
      <Process />
      <Faq />
      <Footer />
    </div>
  );
}
