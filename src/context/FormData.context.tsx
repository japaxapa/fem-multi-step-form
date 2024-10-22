import { createContext, useContext, useReducer, useState } from "react";
import { FormInfo } from "./form.types";
import { emptyData } from "../data/form.data";

interface FormDataContextProps {
  data: FormInfo;
  changeData: (field: string, value: any) => void;
  error: string[];
  validateInfo: (step: number) => boolean;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

export const useFormDataContext = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};

// Define reducer function
function formReducer(state: any, action: any) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

export const FormDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, dispatch] = useReducer(formReducer, emptyData);

  const changeData = (field: string, value: string) => {
    if (!(field in data)) {
      throw new Error("Check the type on data change");
    }

    dispatch({ type: "SET_FIELD", field, value });
  };

  const [error, setError] = useState<string[]>([]);

  const validateInfo = (step: number) => {
    setError([]);

    const newError: string[] = [];

    switch (
      step
      // case 1: {
      //   if (!data.name) {
      //     newError.push("name");
      //   }

      //   if (!data.email || !validateEmail(data.email)) {
      //     newError.push("email");
      //   }

      //   if (!data.phone || !validatePhoneNumber(data.phone)) {
      //     newError.push("phone");
      //   }
      //   break;
      // }
      // case 2: {
      //   if (!data.plan) {
      //     newError.push("plan");
      //   }
      // }
    ) {
    }

    setError(newError);

    if (newError.length) return false;
    return true;
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <FormDataContext.Provider
      value={{
        data,
        changeData,
        error,
        validateInfo,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
