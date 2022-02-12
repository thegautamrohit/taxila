import "./App.css";
import ContactForm from "./Components/CommonComponents/ContactForm/ContactForm";
import Header from "./Components/CommonComponents/Header/Header";
import KeyPoints from "./Components/KeyPoints/KeyPoints";
import WhyTaxila from "./Components/WhyTaxila/WhyTaxila";

function App() {
  return (
    <div className="App">
      <Header />
      <WhyTaxila />
      <KeyPoints />
      <ContactForm />
    </div>
  );
}

export default App;
