import { MainPage } from "@/pages/main";
import { PostDetails } from "@/pages/postDetails";
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layouts/baseLayout";
export const AppRouter = () => {
  return createBrowserRouter([
    {
      element: BaseLayout,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/posts/:postId",
          element: <PostDetails />,
        },
      ],
    },
  ]);
};
