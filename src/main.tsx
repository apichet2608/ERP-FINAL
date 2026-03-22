import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Local_cloud from "./local_cloud";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Local_cloud />
    <App />
  </StrictMode>,
);
