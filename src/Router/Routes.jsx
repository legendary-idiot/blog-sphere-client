import { createBrowserRouter } from "react-router-dom";
import Root from "../RootLayout/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <div>Home</div>,
      },
      {
        path: "/about",
        element: <div>About</div>,
      },
    ],
  },
]);
