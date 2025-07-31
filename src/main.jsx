import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/UserContext";

import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </UserProvider>
  </StrictMode>
);
