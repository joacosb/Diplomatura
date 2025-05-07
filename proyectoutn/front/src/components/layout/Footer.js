import "../../style/components/layout/Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer text-center py-3">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Inmobiliaria Añelo. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
