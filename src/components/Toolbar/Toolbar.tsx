import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to="/pages/about" className="text-decoration-none">
            <span className="navbar-brand mb-0 text-white fs-1">
              Montessori Kindergarten
            </span>
          </NavLink>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/pages/about">
                  About Montessori
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/pages/materials">
                  Materials
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/pages/families">
                  Families
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/pages/research">
                  Research
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/pages/contacts">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/pages/admin">
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Toolbar;
