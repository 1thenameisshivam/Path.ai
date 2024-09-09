import Contact from "@/components/custom/Contact";
import Features from "@/components/custom/Features";
import Hero from "@/components/custom/Hero";

const Home = () => {
  return (
    <div className="text-white overflow-hidden">
      <Hero />
      <Features />
      <Contact />
    </div>
  );
};

export default Home;
