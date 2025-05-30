
const Navbar = ({title}) => {

    return (
        <nav>
            <h2><strong>{title}</strong></h2>
            <ul><strong> EL MENÚ </strong>
                <li>Snape</li>
                <li>Lupin</li>
                <li>Harry</li>
                <li>Patronus</li>
                <li>Avada Kedabra</li>
            </ul>
        </nav>
    );
};

export {Navbar};