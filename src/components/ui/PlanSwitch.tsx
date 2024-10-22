import { BaseSyntheticEvent, useCallback, useEffect } from "react";
import "./PlanSwitch.styles.css";
import { PlanDuration } from "../../context/form.types";
import { useFormDataContext } from "../../context/FormData.context";

export default function PlanSwitch({
  leftLabel,
  rightLabel,
}: {
  leftLabel: string;
  rightLabel: string;
}) {
  const { data, changeData } = useFormDataContext();

  useEffect(() => {
    const lLabel = document.getElementById("leftLabel");
    const rLabel = document.getElementById("rightLabel");

    if (data.planDuration === PlanDuration.yearly) {
      lLabel?.classList.remove("active__switch");
      rLabel?.classList.add("active__switch");
    } else {
      lLabel?.classList.add("active__switch");
      rLabel?.classList.remove("active__switch");
    }
  }, [data.planDuration]);

  const handleChange = useCallback(
    (e: BaseSyntheticEvent) => {
      const newPlanDuration =
        data.planDuration === PlanDuration.monthly
          ? PlanDuration.yearly
          : PlanDuration.monthly;
      changeData("planDuration", newPlanDuration);
    },
    [data.planDuration]
  );
  return (
    <div className="switch__container">
      <div id="leftLabel" className="label active__switch">
        {leftLabel}
      </div>
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name="toggleButton"
          id="toggleButton"
          onChange={handleChange}
          checked={data.planDuration === PlanDuration.yearly}
        />
        <label className="label" htmlFor="toggleButton">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      <div id="rightLabel" className="label">
        {rightLabel}
      </div>
    </div>
  );
}
