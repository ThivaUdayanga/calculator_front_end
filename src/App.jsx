import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import AdminPage from "./pages/adminPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage"; 

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-red-300">
        <Routes path="/">
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
