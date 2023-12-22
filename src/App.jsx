import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";

import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ManClothing from "./components/Layouts/Man";
import HomePage from "./pages/home";
import ManPage from "./pages/man-clothing";
import WomanPage from "./pages/woman-clothing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/man-clothing" element={<ManPage />} />
        <Route path="/woman-clothing" element={<WomanPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
