import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import HomePage from "./components/Layouts/HomePage";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ManClothing from "./components/Layouts/Man";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/man-clothing" element={<ManClothing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
