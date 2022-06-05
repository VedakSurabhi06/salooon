import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
const Navbar = () => {
  const activeStyle = {
    borderBottom: '2px solid black',
    color: 'black',
  };
  return (
    <nav>
      <div className="logo">
        <h1>Love Your Hair</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink
              className="link"
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="link"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="link signUp"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
