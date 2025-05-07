import '../style/pages/InvertirPage.css';

const InvertirPage = () => {
  return (
    <main className="section-fondo-suave mt-header-fix">

      <div className="container-fluid">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-12 col-lg-10">
            <div className="text-center mb-5" data-aos="fade-down">
              <h1 className="titulo-principal">Descubra nuestras opciones</h1>
              <p className="subtitulo">Elija la mejor alternativa para su dinero</p>
            </div>

            <div className="row g-4" data-aos="fade-up">
              <div className="col-md-4">
                <div className="card shadow">
                <img
                    src="/images/proyectos/construccionEnPozo.JPG"
                    className="card-img-top"
                    alt="Construcción en pozo"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Construcción en pozo</h5>
                    <p className="card-text">Sos parte del proceso, desde el lote hasta la casa lista para alquilar.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                <img
                    src="/images/proyectos/abedules.JPG"
                    className="card-img-top"
                    alt="Casas terminadas"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Casas terminadas</h5>
                    <p className="card-text">Comprá casas listas para alquilra.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow">
                <img
                    src="https://fakeimg.pl/600x400/d2e4c4/ffffff?text=Lotes+Vaca+Muerta"
                    className="card-img-top"
                    alt="Lotes"
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Lotes</h5>
                    <p className="card-text">Lotes para invertir o construir en un futuro.</p>
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

export default InvertirPage;
