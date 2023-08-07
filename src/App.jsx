import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";




function App() {
 
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register />}/>
          <Dashboard />
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App
