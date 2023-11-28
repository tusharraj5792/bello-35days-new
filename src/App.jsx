import "./assets/bootstrap/bootstrap.min.css";
import "./index.css";
// import "./assets/bootstrap/bootstrap.min.js";
import { Route, Routes, useLocation } from "react-router-dom";
import MainLayoutRoutes from "./components/layout/MainLayoutRoutes.jsx";
import Header from "./components/header/index.jsx";
import ForgotPassword from "./components/forgotPassword/index.jsx";
import ResetPassword from "./components/forgotPassword/ResetPassword.jsx";
import AccountSetup from "./components/profiles/AccountSetup.jsx";
// import "react-toastify/dist/ReactToastify.css";
import VerifyEmail from "./components/verifyEmail/VerifyEmail.jsx";
import SignUp from "./components/forms/SignUp.jsx";
import SignIn from "./components/forms/SignIn.jsx";
function App() {
  const location = useLocation();
  return (
    <>
      {/* <ToastContainer
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
      /> */}
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
      </Routes>
    </>
  );
}

export default App;
