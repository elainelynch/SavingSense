import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Transaction from "./pages/Transaction";
import Dashboard from "./components/Dashboard";
import Category from "./pages/Category";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={
              <>
                {/* <Expense />
              <Income /> */}
                <Dashboard />
              </>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
