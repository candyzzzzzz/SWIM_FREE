import HeroSection from "../components/HeroSection";
import CardsSection from "../components/Card";
import Footer from "../components/common/Footer";
import Newsletter from "../components/Newsletter";
import Header from "../components/common/Header";

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
