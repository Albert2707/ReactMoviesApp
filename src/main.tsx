import React from "react";
import ReactDOM from "react-dom/client";
import { MovieContextProvider } from "./Context/MovieContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </React.StrictMode>
);
