const Servicio = ({ titulo, descripcion, imagen }) => {
    return (
      <div className="servicio">
        <img src={imagen} alt={titulo} />
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </div>
    );
  };
  
  export default Servicio;
  