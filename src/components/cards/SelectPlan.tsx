import { PlanDuration, PlanName } from "../../context/form.types";
import { useFormDataContext } from "../../context/FormData.context";
import { options } from "../../data/form.data";
import PlanSwitch from "../ui/PlanSwitch";
import "./SelectPlan.styles.css";

function OptionContainer({
  title,
  price,
  planDuration,
  isSelected,
  onClick,
}: {
  title: string;
  price: number;
  planDuration: PlanDuration;
  isSelected: boolean;
  onClick: (field: string, value: any) => void;
}) {
  const name = title.toLowerCase();
  const type = planDuration === PlanDuration.monthly ? "mo" : "yr";

  const handleClick = () => {
    onClick("plan", name);
  };

  return (
    <div
      id={`option__container-${title}`}
      className={`option__container ${
        isSelected ? "option__container--active" : ""
      }`}
      onClick={handleClick}
    >
      <div className="option__icon">
        <img src={`/assets/images/icon-${name}.svg`} alt={`${name} icon`} />
      </div>
      <div className="option__info">
        <h1>{title}</h1>
        <h2>{`$${price}/${type}`}</h2>
        {planDuration === PlanDuration.yearly && <h3>2 months free</h3>}
      </div>
    </div>
  );
}

export default function SelectPlanComponent() {
  const { data, changeData, error } = useFormDataContext();
  const planList = options[data.planDuration];
  return (
    <div className="plan__container">
      <div className="plan__choices">
        {planList.map((option, index) => {
          return (
            <OptionContainer
              key={`${option.title}-${index}`}
              title={option.title}
              price={option.price}
              planDuration={data.planDuration}
              isSelected={option.title.toLowerCase() === data.plan}
              onClick={changeData}
            />
          );
        })}

        {error.includes("plan") && <p>Must choose a plan!</p>}
      </div>
      <div className="plan__btn">
        <PlanSwitch leftLabel="Montly" rightLabel="Yearly" />
      </div>
    </div>
  );
}
