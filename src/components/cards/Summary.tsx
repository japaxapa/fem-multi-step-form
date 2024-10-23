import { useFormContext } from "../../context/Form.context";
import { Addon, PlanDuration } from "../../context/form.types";
import { useFormDataContext } from "../../context/FormData.context";
import { addons, options } from "../../data/form.data";
import "./Summary.styles.css";

interface AddonSummaryProps {
  addon: Addon;
  duration: string;
}

const getAddons = (dataAddons: string[], addons: Addon[]) => {
  let selectedAddons: Addon[] = [];

  for (const dataAddon of dataAddons) {
    const newAddon = addons.find((addon) => addon.title === dataAddon);

    if (!newAddon) {
      return;
    }
    selectedAddons.push(newAddon);
  }

  return selectedAddons;
};

const getTotal = (
  planInfo: { title: string; price: number } | undefined,
  addonsInfo: Addon[] | undefined
) => {
  if (!planInfo || !addonsInfo) {
    return 0;
  }

  let total = 0;
  total = planInfo?.price || 0;

  for (const addon of addonsInfo) {
    total += addon.price;
  }

  return total;
};

const AddonSummaryContainer = ({ addon, duration }: AddonSummaryProps) => {
  return (
    <div className="summary__addons">
      <h2>{addon.title}</h2>
      <p>{`+$${addon.price}/${duration}`}</p>
    </div>
  );
};

export default function Summary() {
  const { data } = useFormDataContext();
  const { changePlan } = useFormContext();

  const planInfo = options[data.planDuration].find(
    (plan) => plan.title.toLocaleLowerCase() === data.plan
  );

  const addonsInfo = getAddons(data.addons, addons[data.planDuration]);

  const isMontly = data.planDuration === PlanDuration.monthly;

  const duration = isMontly ? "mo" : "yr";

  const handleChangePlan = () => {
    changePlan();
  };

  return (
    <div className="summary__container">
      <div className="summary__partials">
        <div className="summary__plan">
          <div className="summary__plan--text">
            <h1>{`${planInfo?.title} (${isMontly ? "Monthly" : "Yearly"})`}</h1>
            <p onClick={handleChangePlan}>Change</p>
          </div>
          <div className="summery__plan--value">
            <h1>{`$${planInfo?.price}/${duration}`}</h1>
          </div>
        </div>
        <hr className="summary__separator" />
        {addonsInfo?.map((addon, index) => {
          return (
            <AddonSummaryContainer
              key={`${addon}-${index}`}
              addon={addon}
              duration={duration}
            />
          );
        })}
      </div>
      <div className="summary__total">
        <h1>{`Total {per ${duration === "yr" ? "year" : "month"}}`}</h1>
        <p>{`$${getTotal(planInfo, addonsInfo)}/${duration}`}</p>
      </div>
    </div>
  );
}
