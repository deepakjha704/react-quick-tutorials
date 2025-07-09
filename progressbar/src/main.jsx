import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Progressbar from "./ProgressBar/ProgressBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Progressbar />
  </StrictMode>
);
