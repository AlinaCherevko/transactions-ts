import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components";
import TransactionPage from "./page/TransactionPage/TransactionPage";
import HomePage from "./page/HomePage/HomePage";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage";
import LoginPage from "./page/LoginPage/LoginPage";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
