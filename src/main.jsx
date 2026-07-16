import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div data-theme="black-dahlia" className="min-h-screen bg-primary text-primary-content">
      <App />
    </div>
  </StrictMode>,
);
