import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/hero_seciton";
import CardsSection from "./components/cards";
import Footer from "./components/footer";
import Newsletter from "./components/newsletter";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <CardsSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
