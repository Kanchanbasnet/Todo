import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import CounterContext from "./context/CounterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterContext>
      <App />
    </CounterContext>
  </StrictMode>
);