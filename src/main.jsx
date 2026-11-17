import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginProvider from "./providers/LoginProvider.jsx";
import PopupProvider from "./providers/PopupProvider.jsx";
import GlobalsContainer from "./components/globals/GlobalsContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/main",
    element: <App />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <PopupProvider>
        <RouterProvider router={router} />
        <GlobalsContainer />
      </PopupProvider>
    </LoginProvider>
  </StrictMode>,
);
