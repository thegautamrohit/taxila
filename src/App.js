import "./App.css";
import ContactForm from "./Components/CommonComponents/ContactForm/ContactForm";
import Footer from "./Components/CommonComponents/Footer/Footer";
import Header from "./Components/CommonComponents/Header/Header";
import HeroBanner from "./Components/HeroBanner/HeroBanner";
import KeyPoints from "./Components/KeyPoints/KeyPoints";
import MarbleSection from "./Components/MarbleSection/MarbleSection";
import MarqueeSection from "./Components/MarqueeSection/MarqueeSection";
import ProductCarousel from "./Components/ProductCarousel/ProductCarousel";
import ShopLink from "./Components/ShopLink/ShopLink";
import WhyTaxila from "./Components/WhyTaxila/WhyTaxila";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <HeroBanner /> */}
      <MarqueeSection />
      {/* <MarbleSection /> */}
      <WhyTaxila />
      {/* <ProductCarousel /> */}
      <ShopLink />
      {/* <KeyPoints /> */}
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
