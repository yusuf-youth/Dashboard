import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/style.scss";
import { AppContextProvider } from "./context/AppContext.jsx";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </HashRouter>
);
