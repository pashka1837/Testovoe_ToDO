import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import makeServer from "../MirageJS/server.ts";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { tasksAPI } from "./services/tasksAPI.ts";
makeServer();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={tasksAPI}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
