import { BaseSyntheticEvent } from "react";
import { useFormContext } from "../../context/Form.context";
import "./Footer.styles.css";
import { StepChangeType } from "../../context/form.types";
import { useFormDataContext } from "../../context/FormData.context";

export default function Footer() {
  const { step, changeStep } = useFormContext();
  const { validateInfo } = useFormDataContext();

  const handleClick = (action: StepChangeType) => (e: BaseSyntheticEvent) => {
    let validateCheck = true;
    if (action === StepChangeType.increase) {
      validateCheck = validateInfo(step);
    }

    if (validateCheck) {
      changeStep(action);
    }
  };

  return (
    <div className="footer__container">
      {step !== 1 && (
        <button
          className="btn__back"
          onClick={handleClick(StepChangeType.reduce)}
        >
          Go Back
        </button>
      )}
      <button
        className="btn__next"
        onClick={handleClick(StepChangeType.increase)}
      >
        {step === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
