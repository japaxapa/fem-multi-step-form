import StepperIcon from "./StepperIcon";
import "./Stepper.styles.css";
import { useFormContext } from "../../context/Form.context";
import { stepsTitles } from "../../data/form.data";

export default function Stepper() {
  const { step } = useFormContext();

  const steps = [1, 2, 3, 4];

  return (
    <div className="stepper__container">
      {steps.map((s, index) => (
        <div key={`${s}-${index}`} className="stepper--item__container">
          <StepperIcon key={s} step={s} isActive={step > 4 || step === s} />
          <div className="stepper--item__text">
            <h1>{`STEP ${s}`}</h1>
            <h2>{stepsTitles[index]}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
