import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import TransactionList from "./components/TransactionList";
import { AppProvider } from "./context/AppContext";

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
        <div>
          <h3 className="mt-3">Transaction List</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <TransactionList />
            </div>
          </div>
        </div>
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
