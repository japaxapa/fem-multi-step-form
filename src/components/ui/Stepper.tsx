import StepperIcon from "./StepperIcon";
import "./Stepper.styles.css";
import { useFormContext } from "../../context/Form.context";

export default function Stepper() {
  const { step } = useFormContext();

  const steps = [1, 2, 3, 4];

  return (
    <div className="stepper__container">
      {steps.map((s) => (
        <StepperIcon key={s} step={s} isActive={step === s} />
      ))}
    </div>
  );
}
