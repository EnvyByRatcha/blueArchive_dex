import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import SearchPage from "./pages/search/SearchPage";
import DetailPage from "./pages/detail/DetailPage";
import FavoriteStudent from "./pages/favoriteStudent/FavoriteStudent";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/students",
    element: <Root />,
    children: [
      {
        index: true,
        element: <SearchPage />,
      },
      {
        path: "/students/details/:name",
        element: <DetailPage />,
      },
      {
        path: "/students/favorite",
        element: <FavoriteStudent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
