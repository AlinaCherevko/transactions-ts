import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components";
import TransactionPage from "./page/TransactionPage/TransactionPage";
import HomePage from "./page/HomePage/HomePage";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import "react-toastify/dist/ReactToastify.css";

import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { useAuthZustant } from "./store/store";
import { useEffect } from "react";

function App() {
  const { checkAuth, user } = useAuthZustant();
  console.log(user);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
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
    </>
  );
}

export default App;
