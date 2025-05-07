import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/layout/HeaderNav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import InvertirPage from "./pages/InvertirPage";
import AlquilarPage from "./pages/AlquilarPage";
import ContactoPage from "./pages/ContactoPage";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import './App.css';

function App() {
  // Inicializar AOS una vez al montar la app
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderNav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/invertir" element={<InvertirPage />} />
            <Route path="/alquilar" element={<AlquilarPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
