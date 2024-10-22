import { useState } from "react";
import { addons } from "../../data/form.data";
import "./Addons.styles.css";
import { PlanDuration } from "../../context/form.types";
import { useFormDataContext } from "../../context/FormData.context";

const getFormattedPrice = (price: number, plan: PlanDuration) => {
  const end = plan === PlanDuration.monthly ? "mo" : "yr";
  return `+$${price.toFixed(0)}/${end}`;
};

export default function Addons() {
  const { data } = useFormDataContext();

  const [checkedState, setCheckedState] = useState(
    new Array(addons[data.planDuration].length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const checkedDiv = document.getElementById(
      `addons__list--item-${position}`
    );

    const updatedCheckedState = checkedState.map((item, index) => {
      if (index === position) {
        if (item) checkedDiv?.classList.remove("active--item");
        else checkedDiv?.classList.add("active--item");
        return !item;
      } else {
        return item;
      }
    });

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="addons__container">
      <ul className="addons__list">
        {addons[data.planDuration].map(
          ({ title, description, price }, index) => {
            return (
              <li key={index}>
                <div
                  id={`addons__list--item-${index}`}
                  className="addons__list--item"
                  onClick={() => handleOnChange(index)}
                >
                  <div className="left__section">
                    <div>
                      <input
                        type="checkbox"
                        className="css-checkbox"
                        id={`custom-checkbox-${index}`}
                        name={title}
                        value={title}
                        checked={checkedState[index]}
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
