import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { CopilotKit } from "@copilotkit/react-core"; 
import "@copilotkit/react-ui/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <CopilotKit publicApiKey="ck_pub_002315c9869589798b9e1f1ec23504c6">
    <App />
    </CopilotKit>
    </BrowserRouter>
  </StrictMode>
);
