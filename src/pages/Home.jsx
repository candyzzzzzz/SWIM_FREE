import HeroSection from "../components/HeroSection";
import CardsSection from "../components/Card";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CardsSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
