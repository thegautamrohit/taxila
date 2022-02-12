import "./App.css";
import ContactForm from "./Components/CommonComponents/ContactForm/ContactForm";
import KeyPoints from "./Components/KeyPoints/KeyPoints";
import WhyTaxila from "./Components/WhyTaxila/WhyTaxila";

function App() {
  return (
    <div className="App">
      <WhyTaxila />
      <KeyPoints />
      <ContactForm />
    </div>
  );
}

export default App;
