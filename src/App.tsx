import "./App.css";
import Card from "./components/base/Card";
import Footer from "./components/base/Footer";
import Stepper from "./components/ui/Stepper";
import { useFormContext } from "./context/Form.context";

function App() {
  const { step } = useFormContext();
  return (
    <>
      <div className="container">
        <Stepper />
        <div className="info">
          <Card />
          {step !== 5 && (
            <>
              <div className="spacer"></div>
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
