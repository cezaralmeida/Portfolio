import Navigation from "./Navigation";
import Hero from "./Hero";
import FeaturedWork from "./FeaturedWork";
import HelpfulResources from "./HelpfulResources";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <FeaturedWork />
        <HelpfulResources />
      </main>
      <Footer />
    </div>
  );
}
