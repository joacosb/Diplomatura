import '../style/pages/AlquilarPage.css';

const AlquilarPage = () => {
  return (
    <main className="section-fondo-suave mt-5">
      <div className="container-fluid">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-12 col-lg-10">
            <div className="text-center mb-4" data-aos="fade-down">
              <h1 className="titulo-principal">Descubra nuestras opciones.</h1>
              <p className="subtitulo">Alquiler corporativo de calidad en Añelo, Vaca Muerta.</p>
              <p className="subtitulo small">
                Todas los Duplex y casas de 3 ambientes tienen estacionamiento, patio y parrilla, entre otras comodidades.
              </p>
            </div>

            <div className="row g-4" data-aos="fade-up">

              {/* Maria I */}
              <div className="col-md-4">
                <div className="card shadow h-100">
                  <div className="position-relative">
                    <img src="/images/proyectos/MariaI.JPG" className="card-img-top" alt="Maria I" />
                    <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">Maria I</h2>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Maria I</h5>
                    <p className="card-text">Duplex y monoambientes.</p>
                  </div>
                </div>
              </div>

              {/* Maria II */}
              <div className="col-md-4">
                <div className="card shadow h-100">
                  <div className="position-relative">
                    <img src="/images/proyectos/MariaII.jpg" className="card-img-top" alt="Maria II" />
                    <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">Maria II</h2>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Maria II</h5>
                    <p className="card-text">Casas de 3 ambientes.</p>
                  </div>
                </div>
              </div>

              {/* Abedules */}
              <div className="col-md-4">
                <div className="card shadow h-100">
                  <div className="position-relative">
                    <img src="/images/proyectos/abedules.JPG" className="card-img-top" alt="Abedules" />
                    <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">Abedules</h2>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Abedules</h5>
                    <p className="card-text">Casas de 3 ambientes.</p>
                  </div>
                </div>
              </div>

              {/* Pampa III (imagen ficticia) */}
              <div className="col-md-4">
                <div className="card shadow h-100">
                  <div className="position-relative">
                    <img src="https://fakeimg.pl/600x400/cccccc/000000?text=Pampa+III" className="card-img-top" alt="Pampa III" />
                    <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">Pampa III</h2>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Pampa III</h5>
                    <p className="card-text">Departamentos 1 y 2 dormitorios.</p>
                  </div>
                </div>
              </div>

              {/* Donostia I */}
              <div className="col-md-4">
                <div className="card shadow h-100">
                  <div className="position-relative">
                    <img src="/images/proyectos/donostia.jpg" className="card-img-top" alt="Donostia I" />
                    <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">Donostia I</h2>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Donostia I</h5>
                    <p className="card-text">Departamentos 3 ambientes.</p>
                  </div>
                </div>
              </div>

              {/* Donostia II */}
              <div className="col-md-4">
                <div className="card shadow h-100">
                  <div className="position-relative">
                    <img src="/images/proyectos/donostia.jpg" className="card-img-top" alt="Donostia II" />
                    <h2 className="position-absolute top-50 start-50 translate-middle text-white fw-bold">Donostia II</h2>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Donostia II</h5>
                    <p className="card-text">Próximamente.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AlquilarPage;
