import "./StepperIcon.styles.css";

interface StepperIconProps {
  step: number;
  isActive: boolean;
}

export default function StepperIcon({ step, isActive }: StepperIconProps) {
  const styles = `rounded__container ${isActive ? "active" : ""}`;
  return <div className={styles}>{step}</div>;
}
