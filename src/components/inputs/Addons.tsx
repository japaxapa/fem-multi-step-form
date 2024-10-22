import { addons } from "../../data/form.data";
import "./Addons.styles.css";
import { Addon, PlanDuration } from "../../context/form.types";
import { useFormDataContext } from "../../context/FormData.context";

const getFormattedPrice = (price: number, plan: PlanDuration) => {
  const end = plan === PlanDuration.monthly ? "mo" : "yr";
  return `+$${price.toFixed(0)}/${end}`;
};

export default function Addons() {
  const { data, changeData } = useFormDataContext();

  const isInDataAddons = (addon: Addon) => {
    return data.addons.some((dataAddons) => dataAddons.title === addon.title);
  };

  const handleChange = (addon: Addon) => {
    let newAddons: Addon[] = [...data.addons];
    if (isInDataAddons(addon)) {
      newAddons = data.addons.filter(
        (dataAddon) => dataAddon.title !== addon.title
      );
    } else {
      newAddons.push(addon);
    }
    changeData("addons", newAddons);
  };

  return (
    <div className="addons__container">
      <ul className="addons__list">
        {addons[data.planDuration].map(
          ({ title, description, price }, index) => {
            const isSelected = isInDataAddons({ title, description, price });
            return (
              <li key={index}>
                <div
                  id={`addons__list--item-${index}`}
                  className={`addons__list--item ${
                    isSelected ? "active--item" : ""
                  }`}
                  onClick={() => handleChange({ title, description, price })}
                >
                  <div className="left__section">
                    <div>
                      <input
                        type="checkbox"
                        className="css-checkbox"
                        id={`custom-checkbox-${index}`}
                        name={title}
                        value={title}
                        checked={isSelected}
                        onChange={() => {
                          console.log("clicked");
                        }}
                      />
                      <label></label>
                    </div>
                    <div className="left__section--text">
                      <h1>{title}</h1>
                      <h2>{description}</h2>
                    </div>
                  </div>
                  <div className="right__section">
                    {getFormattedPrice(price, data.planDuration)}
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
