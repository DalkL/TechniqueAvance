import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="main-nav p-5">
            <Link to='/'>Accueil</Link>
            <Link to='/Produits'>Produits</Link>
        </nav>
    )
}

export default Navbar