import "./assets/bootstrap/bootstrap.min.css";
import "./index.css";
// import "./assets/bootstrap/bootstrap.min.js";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayoutRoutes from "./components/layout/MainLayoutRoutes.jsx";
import Header from "./components/header/index.jsx";
import ForgotPassword from "./components/forgotPassword/index.jsx";
import ResetPassword from "./components/forgotPassword/resetPassword/index.jsx";
import AccountSetup from "./components/profiles/AccountSetup.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyEmail from "./components/verifyEmail/index.jsx";
import SignUp from "./components/forms/signUp/index.jsx";
import SignIn from "./components/forms/signIn/index.jsx";
function App() {
  const location = useLocation();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {(location.pathname === "/forgot-password" ||
        location.pathname === "/reset-password" ||
        location.pathname === "/account-setup") && (
        <div>
          <Header />
        </div>
      )}
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:id" element={<ResetPassword />} />
        <Route path="/verify-email/:id" element={<VerifyEmail />} />
        <Route path="/account-setup" element={<AccountSetup />} />
        <Route path="*" element={<MainLayoutRoutes />} />
      </Routes>
    </>
  );
}

export default App;
