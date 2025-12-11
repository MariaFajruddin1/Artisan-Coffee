import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}
