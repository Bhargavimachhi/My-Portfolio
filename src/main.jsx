import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { PuzzleProvider } from "./context/puzzleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PuzzleProvider>
        <App />
      </PuzzleProvider>
    </BrowserRouter>
  </StrictMode>
);
