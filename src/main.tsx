import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page.tsx";
import MoviePage from "./pages/movie-page.tsx";
import MovieDetailPage from "./pages/movie-detail-page.tsx";
import SearchResultPage from "./pages/search-result-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "search-results",
        element: <SearchResultPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
