import './Navbar.css'
import CardWidget from './CardWidget.js'
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <>
        <nav className="navbarstyle navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Creaciones ZJM</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-primary" aria-current="page" to="/ourHistory">Nuestra historia</NavLink>
                </li>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos y servicios
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><NavLink className="nav-link btn btn-outline-primary" to="/products">Productos</NavLink></li>
                    <li><a className="dropdown-item" href="#">Servicios</a></li>
                  </ul>
                </div>

                {/* <
                
                li className="nav-item"> */}
                {/* <
                
                NavLink className="nav-link btn btn-outline-primary" to="/products">Productos y servicios</NavLink> */}
                {/* </li> */}
                <li className="nav-item">
                <NavLink className="nav-link btn btn-outline-primary" to="/socialMedia">Redes sociales</NavLink>
                </li>
            </ul>
            </div>
        </div>
        <CardWidget/>
        </nav>
        </>
    )
}

export default NavBar