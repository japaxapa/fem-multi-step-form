import "./App.css";
import Card from "./components/base/Card";
import Footer from "./components/base/Footer";
import Stepper from "./components/ui/Stepper";

function App() {
  return (
    <>
      <div className="container">
        <Stepper />
        <Card />
        <div className="spacer"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
