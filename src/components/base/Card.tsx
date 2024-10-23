import { useFormContext } from "../../context/Form.context";
import "./Card.styles.css";
import PersonalInfoComponent from "../cards/PersonalInfo";
import SelectPlanComponent from "../cards/SelectPlan";
import Addons from "../cards/Addons";
import { useCallback } from "react";
import Summary from "../cards/Summary";

export default function Card() {
  const { step, title, description } = useFormContext();

  const renderStepContent = useCallback(() => {
    switch (step) {
      case 1:
        return <PersonalInfoComponent />;
      case 2:
        return <SelectPlanComponent />;
      case 3:
        return <Addons />;
      case 4:
        return <Summary />;
      default:
        return <div>Invalid Step</div>;
    }
  }, [step]);

  if (step === 5) {
    return (
      <div className="card__container--thanks">
        <div className="card__icon">
          <img src="/assets/images/icon-thank-you.svg" alt="thank you icon" />
        </div>
        <h1 className="card__title">{title}</h1>
        <h2 className="card__description">{description}</h2>
      </div>
    );
  }

  return (
    <div className="card__container">
      <h1 className="card__title">{title}</h1>
      <h2 className="card__description">{description}</h2>
      <div>{renderStepContent()}</div>
    </div>
  );
}
