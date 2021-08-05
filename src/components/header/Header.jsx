import { Link } from 'react-router-dom';
import './Header.scss';


const Header = () => {


    return (


        <>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid ">
                    <div className="navbar-brand fw-bold text-light"><Link to="/">LOGO</Link></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-lg-end me-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-link active text-light header-menu-links mx-2" aria-current="page"><Link to="/contactos">Contactos</Link></li>
                            <li className="nav-link text-light mx-2 header-menu-links"><Link to="/companies">Compañias</Link></li>
                            <li className="nav-link text-light mx-2 header-menu-links"><Link to="/usuarios">Usuarios</Link></li>
                            <li className="nav-link text-light mx-2 header-menu-links"><Link to="/region">Region/Ciudad</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>


    );
}



export default Header;