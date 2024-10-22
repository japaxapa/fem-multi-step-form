import { useFormContext } from "../../context/Form.context";
import "./Card.styles.css";
import PersonalInfoComponent from "../inputs/PersonalInfo";
import SelectPlanComponent from "../inputs/SelectPlan";
import Addons from "../inputs/Addons";
import { useCallback } from "react";

export default function Card() {
  const { step, title, description } = useFormContext();

  const CardComponent = ({ step }: { step: number }) => {
    const renderStepContent = useCallback(() => {
      switch (step) {
        case 1:
          return <PersonalInfoComponent />;
        case 2:
          return <SelectPlanComponent />;
        case 3:
          return <Addons />;
        case 4:
          return <div>step 4</div>;
        default:
          return <div>Invalid Step</div>;
      }
    }, [step]);

    return <div>{renderStepContent()}</div>;
  };

  return (
    <div className="card__container">
      <h1 className="card__title">{title}</h1>
      <h2 className="card__description">{description}</h2>
      <CardComponent step={step} />
    </div>
  );
}
