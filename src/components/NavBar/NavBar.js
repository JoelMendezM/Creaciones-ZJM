import './Navbar.css';
import CardWidget from './CardWidget.js';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav className="navbarstyle navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Creaciones ZJM
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-outline-primary"
                  aria-current="page"
                  to="/ourHistory">
                  Nuestra historia
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link btn btn-outline-primary"
                  aria-current="page"
                  to="/productsAndServices">
                  Productos y servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-primary" to="/socialMedia">
                  Redes sociales
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <NavLink className="nav-link btn btn-outline-primary" to="/cart">
          <CardWidget />
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
