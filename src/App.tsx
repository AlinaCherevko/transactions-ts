import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { useAuthZustant } from "./store/store";
import { lazy, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import "react-toastify/dist/ReactToastify.css";

const HomePage = lazy(() => import("./page/HomePage/HomePage"));
const TransactionPage = lazy(
  () => import("./page/TransactionPage/TransactionPage")
);
const LoginPage = lazy(() => import("./page/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./page/RegisterPage/RegisterPage"));
const NotFoundPage = lazy(() => import("./page/NotFoundPage/NotFoundPage"));

function App() {
  const { checkAuth, isLoading } = useAuthZustant();
  //console.log(user);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Loader />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <TransactionPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
