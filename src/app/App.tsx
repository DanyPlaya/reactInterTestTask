import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./providers/routeProvider";

export const App = () => {
  return <RouterProvider router={AppRouter()}></RouterProvider>;
};
