import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4 bg-white border-bottom box-shadow">
        <div className="container-fluid">
          {/* Logo and Brand */}
          <div className="d-flex align-items-center">
            <img src={logo} alt='' width={100} className="me-3" />
            <Link className="navbar-brand fw-bold" to='/'>J~DESIGNS</Link>
          </div>
          
          {/* Navbar Toggler for Mobile View */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item me-3">
                <Link className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-dark" to="/about">About</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-dark" to="/services">Our Services</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-dark" to="/contacts">Contacts</Link>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex me-3">
              <input 
                type="text" 
                className="form-control me-2" 
                placeholder="Search..." 
              />
              <button className="btn btn-outline-dark" type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>

            {/* Login Button */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link me-2 text-dark" to="/login">
                  <i className="fa-solid fa-user me-1"></i> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
