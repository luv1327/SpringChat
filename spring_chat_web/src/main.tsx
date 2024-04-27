import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MainProvider } from "./context/MainContext.tsx";
import "react-chat-elements/dist/main.css";
import "./index.css";
import AppNavigation from "./components/AppNavigation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainProvider>
      <AppNavigation />
    </MainProvider>
  </React.StrictMode>
);
