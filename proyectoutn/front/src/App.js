// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Header from "./components/layout/Header";
// import Nav from "./components/layout/Nav";
// import Footer from './components/layout/Footer';

// import ContactoPage from './pages/ContactoPage';
// import HomePage from './pages/HomePage';
// import NosotrosPage from './pages/NosotrosPage';
// import NovedadesPage from './pages/NovedadesPage';

// // import './styles/layout.css';
// // import './styles/ContactoPage.css';
// // // import './styles/galeria.css';
// // import './styles/HomePage.css';
// // import './styles/NosotrosPage.css';
// // import './styles/NovedadesPage.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <BrowserRouter>
//         <Nav></Nav>
//         <Routes>
//           <Route path='/' element={<HomePage />} />
//           <Route path='nosotros' element={<NosotrosPage />} />
//           <Route path='novedades' element={<NovedadesPage />} />
//           <Route path='contacto' element={<ContactoPage />} />
//         </Routes>
//       </BrowserRouter>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

// ✅ Agregar importaciones de las páginas
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactoPage from "./pages/ContactoPage";

import "./App.css"; // Importar estilos globales

const App = () => {
    return (
        <Router>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/nosotros" element={<NosotrosPage />} />
                <Route path="/novedades" element={<NovedadesPage />} />
                <Route path="/contacto" element={<ContactoPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

