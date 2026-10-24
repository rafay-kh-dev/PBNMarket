import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
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
      <BentoFeatures />
      <Services />
      <Process />
      <Faq />
      <Footer />
    </div>
  );
}
