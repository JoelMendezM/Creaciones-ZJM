import './Navbar.css'

const NavBar = () => {
    return (
        <nav className="navbarstyle navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Creaciones ZJM</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="OurHistory.js">Nuestra historia</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Productos y servicios</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Redes sociales</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default NavBar