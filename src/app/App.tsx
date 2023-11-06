import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./providers/routeProvider";
import { StoreProvider } from "./providers/storeProvider/storeProvider";
import "@/shared/ui/base.scss";
export const App = () => {
  return (
    <StoreProvider>
      <RouterProvider router={AppRouter()} />;
    </StoreProvider>
  );
};
