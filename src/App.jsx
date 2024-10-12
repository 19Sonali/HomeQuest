import HomePage from "./routes/homePage/HomePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/ListPage/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/SinglePage/SinglePage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
