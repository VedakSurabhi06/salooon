import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header id="header">
      <div className="d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">SALOON</a>
        </h1>
        <a href="index.html" className="logo me-auto">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link className="nav-link scrollto" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/service">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="/about">
                About
              </Link>
            </li>
            {/* <li>
              <Link className="nav-link scrollto" to="/appointment">
                Appointment
              </Link>
            </li> */}
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <Link to="/register" className="appointment-btn scrollto">
          <span className="d-none d-md-inline"></span> SIGNUP
        </Link>
      </div>
    </header>
  );
};
export default Navbar;
