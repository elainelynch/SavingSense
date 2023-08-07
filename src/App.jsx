import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ForgotPassword from "./components/ForgotPassword";



function App() {
 
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/register" element={<Register />}/>
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App
