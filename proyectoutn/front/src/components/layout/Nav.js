import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="holder">
                    <li key="home">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "activo" : "")}>
                            Home
                        </NavLink>
                    </li>
                    <li key="invertir">
                        <NavLink to="/">Invertir</NavLink>
                    </li>
                    <li key="alquilar">
                        <NavLink to="/">Alquilar</NavLink>
                    </li>
                    <li key="contacto">
                        <NavLink to="/">Contacto</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
