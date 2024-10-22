import { ReactNode } from "react";
import { FormProvider } from "./Form.context";
import { FormDataProvider } from "./FormData.context";

interface CompleteFormProviderProps {
  children: ReactNode;
}

export default function CompleteFormProvider({
  children,
}: CompleteFormProviderProps) {
  return (
    <FormDataProvider>
      <FormProvider>{children}</FormProvider>
    </FormDataProvider>
  );
}
