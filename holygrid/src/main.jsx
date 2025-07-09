import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HolyGrid from "./HolyGrid";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HolyGrid />
  </StrictMode>
);
