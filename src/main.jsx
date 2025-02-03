import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
