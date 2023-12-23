import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ErrorPage } from "./pages/ErrorPage/ErrorPage";

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage.jsx"));
const TestPage = lazy(() => import("./pages/TestPage/TestPage.jsx"));

export const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <AuthPage />
              </Suspense>
            </PublicRoute>
          }
        />

        <Route
          path="/tests"
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <TestPage />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
