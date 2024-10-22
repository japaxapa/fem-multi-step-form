import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import CompleteFormProvider from "./context/FormComplete.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CompleteFormProvider>
      <App />
    </CompleteFormProvider>
  </StrictMode>
);
