import { BaseSyntheticEvent, useCallback, useEffect } from "react";
import "./PersonalInfo.styles.css";
import { useFormDataContext } from "../../context/FormData.context";

function InputContainer({
  children,
  error,
}: {
  children: React.ReactNode;
  error: boolean;
}) {
  return (
    <div
      className={`input__container ${error ? "input__container--error" : ""}`}
    >
      {children}
      {error && <p>Check this information</p>}
    </div>
  );
}

export default function PersonalInfoComponent() {
  const { data, changeData, error } = useFormDataContext();

  const handleChange = useCallback(
    (type: string) => (e: BaseSyntheticEvent) => {
      changeData(type, e.target.value);
    },
    [changeData]
  );

  useEffect(() => {
    console.log(error);
    console.log(error.includes("name"), "here");
  }, [error]);

  return (
    <>
      <InputContainer error={error.includes("name")}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={data.name}
          placeholder="e.g. Stephen King"
          onChange={handleChange("name")}
        />
      </InputContainer>
      <InputContainer error={error.includes("email")}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="e.g. stephenking@lorem.com"
          onChange={handleChange("email")}
        />
      </InputContainer>
      <InputContainer error={error.includes("phone")}>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          placeholder="e.g. + 1 234 567 890"
          onChange={handleChange("phone")}
        />
      </InputContainer>
    </>
  );
}
