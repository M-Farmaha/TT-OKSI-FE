import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { PageLoader } from "components/Loaders/Loaders";

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage.jsx"));
const TestPage = lazy(() => import("./pages/TestPage/TestPage.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage.jsx"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <Suspense fallback={<PageLoader />}>
                <AuthPage />
              </Suspense>
            </PublicRoute>
          }
        />

        <Route
          path="/tests"
          element={
            <PrivateRoute>
              <Suspense fallback={<PageLoader />}>
                <TestPage />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <PublicRoute>
              <Suspense fallback={<PageLoader />}>
                <ErrorPage />
              </Suspense>
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
};
