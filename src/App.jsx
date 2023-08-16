import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { AppProvider } from "./context/AppContext";
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
