import { NavLink } from 'react-router-dom';

export const DropDownButton = ({ productsOrServices }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false">
        Categoría
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <NavLink className="nav-link btn btn-outline-primary" to="/productsAndServices/products">
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link btn btn-outline-primary" to="/productsAndServices/services">
            Servicios
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
