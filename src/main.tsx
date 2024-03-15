import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loading from "./components/loading.tsx";
import ErrorPage from "./pages/error-page.tsx";

const HomePage = lazy(() => import("./pages/home-page.tsx"));
const MoviePage = lazy(() => import("./pages/movie-page.tsx"));
const MovieDetailPage = lazy(() => import("./pages/movie-detail-page.tsx"));
const SearchResultPage = lazy(() => import("./pages/search-result-page.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/movie",
        element: (
          <Suspense fallback={<Loading />}>
            <MoviePage />
          </Suspense>
        ),
      },
      {
        path: "/movie/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <MovieDetailPage />
          </Suspense>
        ),
      },
      {
        path: "search-results",
        element: (
          <Suspense fallback={<Loading />}>
            <SearchResultPage />
          </Suspense>
        ),
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
