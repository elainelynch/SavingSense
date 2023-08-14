import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
