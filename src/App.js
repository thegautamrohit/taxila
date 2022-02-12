import "./App.css";
import ContactForm from "./Components/CommonComponents/ContactForm/ContactForm";
import Footer from "./Components/CommonComponents/Footer/Footer";
import Header from "./Components/CommonComponents/Header/Header";
import KeyPoints from "./Components/KeyPoints/KeyPoints";
import MarqueeSection from "./Components/MarqueeSection/MarqueeSection";
import ShopLink from "./Components/ShopLink/ShopLink";
import WhyTaxila from "./Components/WhyTaxila/WhyTaxila";

function App() {
  return (
    <div className="App">
      <Header />
      <MarqueeSection />
      <WhyTaxila />
      <ShopLink />
      <KeyPoints />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
