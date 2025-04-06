import { useState } from "react";
import "../style/pages/HomePage.css";
import Servicio from "../components/layout/Servicio"; // por si querés agregar también servicios acá

const HomePage = () => {
  const [mostrarTestimonios, setMostrarTestimonios] = useState(true);

  return (
    <main className="holder">
      <div className="homeimg">
        <img src="/images/img01.jpg" alt="avion" />
      </div>

      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>
            Somos una empresa dedicada al transporte logístico, con más de 20 años de experiencia.
          </p>
        </div>

        <div className="right">
          <h2>Testimonios</h2>
          <button onClick={() => setMostrarTestimonios(!mostrarTestimonios)}>
            {mostrarTestimonios ? "Ocultar testimonios" : "Mostrar testimonios"}
          </button>

          {mostrarTestimonios && (
            <div className="testimonios">
              <div className="testimonio">
                <span className="cita">Simplemente excelente</span>
                <span className="autor">Juan Perez</span>
              </div>
              <div className="testimonio">
                <span className="cita">Muy confiables y atentos</span>
                <span className="autor">María Gómez</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
