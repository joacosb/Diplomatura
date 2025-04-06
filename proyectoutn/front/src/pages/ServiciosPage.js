import Servicio from "../components/layout/Servicio";
import "../style/pages/ServiciosPage.css";

const servicios = [
  {
    titulo: "Transporte nacional",
    descripcion: "Cubrimos todo el país con unidades modernas.",
    imagen: "/images/servicio1.jpg"
  },
  {
    titulo: "Distribución urbana",
    descripcion: "Logística rápida dentro de ciudades.",
    imagen: "/images/servicio2.jpg"
  },
  {
    titulo: "Almacenaje",
    descripcion: "Depósitos temporales en puntos estratégicos.",
    imagen: "/images/servicio3.jpg"
  }
];

const ServiciosPage = () => {
  return (
    <main className="holder servicios-page">
      <h2>Servicios</h2>
      <p>Estos son los principales servicios que ofrecemos a nuestros clientes:</p>
      <div className="servicios-lista">
        {servicios.map((serv, i) => (
          <Servicio
            key={i}
            titulo={serv.titulo}
            descripcion={serv.descripcion}
            imagen={serv.imagen}
          />
        ))}
      </div>
    </main>
  );
};

export default ServiciosPage;
