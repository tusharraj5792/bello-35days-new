import "./assets/bootstrap/bootstrap.min.css";
import "./index.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/index.jsx";
import AccountSetup from "./components/profiles/accountSetup/index.jsx";
import VerifyEmail from "./components/verifyEmail/index.jsx";
function App() {
  const location = useLocation();
  return (
    <>     
      {(location.pathname === "/forgot-password" ||
        location.pathname === "/reset-password" ||
        location.pathname === "/account-setup") && (
        <div>
          <Header />
        </div>
      )}
      <Routes>        
        <Route path="/verify-email/:id" element={<VerifyEmail />} />
        <Route path="/account-setup" element={<AccountSetup />} />
      </Routes>
    </>
  );
}

export default App;
