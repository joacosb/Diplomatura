import '../style/pages/ContactoPage.css';

const ContactoPage = () => {
  return (
    <main className="section-fondo-suave mt-5">
      <div className="container-fluid">
        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-12 col-lg-10">
            <div className="text-center mb-5" data-aos="fade-down">
              <h1 className="titulo-principal">Contáctenos</h1>
              <p className="subtitulo">Déjanos tu consulta y te responderemos a la brevedad.</p>
            </div>

            <div className="row g-4">
              {/* Formulario */}
              <div className="col-md-6">
                <form action="https://formsubmit.co/grupopampanqn@gmail.com" method="POST">
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" name="nombre" className="form-control" placeholder="Tu nombre" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input type="email" name="email" className="form-control" placeholder="tu@email.com" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mensaje</label>
                    <textarea name="mensaje" className="form-control" placeholder="Escribe tu mensaje aquí" rows="5" required></textarea>
                  </div>
                  {/* Campos ocultos para evitar spam y redireccionar */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={window.location.href} />
                  <button type="submit" className="btn btn-primary w-100">Enviar</button>
                </form>
              </div>

              {/* Mapa */}
              <div className="col-md-6">
                <h5 className="mb-3">Nuestra ubicación</h5>
                <div className="ratio ratio-4x3">
                  <iframe
                    title="Mapa Añelo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.272318598172!2d-68.77510272343405!3d-38.613609871786956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960c7b27a89c1e55%3A0x41bb137c50f589bd!2zQcOtZWxvLCBOZXVxdcOtbg!5e0!3m2!1ses!2sar!4v1689887979786!5m2!1ses!2sar"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactoPage;
