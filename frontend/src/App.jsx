import { Hero } from "./components/Hero";
import { BentoFeatures } from "./components/BentoFeatures";
import { Services } from "./components/Services";

export default function App() {
  return (
    <div className="p-3 bg-[#F4F5F7]">
      <div className="rounded-x5 bg-white overflow-hidden">
        <Hero />
        <BentoFeatures />
        <Services />
      </div>
    </div>
  );
}
