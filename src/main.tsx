import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/normalize.css"
import { GlobalProvider } from "./context/GlobalContext";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
    <App />
   
    </GlobalProvider>
  </React.StrictMode>
);
