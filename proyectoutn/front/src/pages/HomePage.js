import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style/pages/HomePage.css";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <main>
      <div className="hero-home d-flex align-items-center position-relative">
        <img
          src="/images/fondoPrincipal.jpg"
          alt="Fondo principal"
          className="background-image"
        />
        <div className="overlay w-100 text-center text-white py-5 position-absolute top-0 start-0">
          <h1 className="display-5 fw-bold mb-3" data-aos="fade-up">
            Encontrá tu próximo espacio en Vaca Muerta
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="200">
            Invertí con seguridad, alquilá con respaldo profesional.
          </p>
          <div
            className="d-flex justify-content-center gap-3 mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="/invertir" className="btn btn-primary">Invertir</a>
            <a href="/alquilar" className="btn btn-dark">Alquilar</a>
            <a href="/contacto" className="btn btn-outline-light">Contacto</a>
          </div>
        </div>
      </div>

      {/* Secciones con contenido principal */}
      <section className="section-fondo-suave py-5">
        <div className="container-fluid">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-12 col-lg-10">

              {/* Carruseles */}
              <div className="row g-4">
                <div className="col-md-6">
                  <div id="carousel1" className="carousel slide shadow" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="/images/proyectos/MariaI.JPG" className="d-block w-100" alt="Complejo Maria" />
                      </div>
                      <div className="carousel-item">
                        <img src="/images/proyectos/yellowstone.jpg" className="d-block w-100" alt="Complejo Yellowstone" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
                      <span className="carousel-control-next-icon" />
                    </button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div id="carousel2" className="carousel slide shadow" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="/images/proyectos/MariaII.jpg" className="d-block w-100" alt="Nuevo Proyecto" />
                      </div>
                      <div className="carousel-item">
                        <img src="/images/proyectos/donostia.jpg" className="d-block w-100" alt="Próximamente" />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" />
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
                      <span className="carousel-control-next-icon" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Carteles informativos */}
              <div className="row g-4 mt-4">
                <div className="col-md-6">
                  <div className="card shadow p-4">
                    <h4>¿Quiénes Somos?</h4>
                    <p>
                      Con más de 25 años de experiencia en el sector inmobiliario, somos líderes en la Patagonia.
                      Nos especializamos en inversiones y alquileres corporativos en Vaca Muerta.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card shadow p-4">
                    <h4>¿Qué ofrecemos?</h4>
                    <p>
                      Invertir de forma segura y rentable en proyectos inmobiliarios.
                      Alquileres corporativos con todos los servicios incluidos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Propiedades destacadas */}
              <div className="my-5">
                <h3 className="text-center mb-4 fw-bold">Propiedades Destacadas</h3>
                <div className="row justify-content-center g-4">
                  <div className="col-md-4">
                    <div className="card shadow">
                      <img src="/images/proyectos/MariaI.JPG" className="card-img-top" alt="Complejo Maria" />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">Complejo María</h5>
                        <p className="card-text">Departamentos modernos con excelente ubicación.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card shadow">
                      <img src="/images/proyectos/yellowstone.jpg" className="card-img-top" alt="Yellowstone" />

                      <div className="card-body">
                        <h5 className="card-title fw-bold">Complejo Yellowstone</h5>
                        <p className="card-text">Departamentos equipados para alquiler corporativo.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card shadow">
                      <img src="/images/proyectos/donostia.jpg" className="card-img-top" alt="Donostia" />
                      <div className="card-body">
                        <h5 className="card-title fw-bold">Nuevo Desarrollo</h5>
                        <p className="card-text">Invierte en proyectos en construcción en Vaca Muerta.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div> {/* fin col-10 */}
          </div> {/* fin row */}
        </div> {/* fin container-fluid */}
      </section>
    </main>
  );
};

export default HomePage;
