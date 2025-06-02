import { Link } from "react-router-dom";

/*
 El componente Link permite a los usuarios moverse entre
 las diferentes "páginas" de la aplicación pero evita
 recargas completas, preservando el estado de la aplicación.
*/

const Navbar = ({title}) => {

    return (
        <nav>
            <h2><strong>{title}</strong></h2>
            <ul><strong> EL MENÚ </strong>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/products">Productos</Link></li>
                <li><Link to="/aboutus" >About Us</Link></li>
                <li><Link to ="/contactus">Contact Us</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </nav>
    );
};

export {Navbar};