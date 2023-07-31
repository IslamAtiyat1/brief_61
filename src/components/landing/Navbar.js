import React from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import Signin from '../Auth/Signin'
import WeatherApp from './WeatherApp';
import YouTubeVideos from './Youtube';

const Navbar = () => {
  const navigate = useNavigate();

  function logout() {
    sessionStorage.clear();
    navigate("/");

  }
  return (
    <>
      <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
          <a href="/" className="navbar-brand font-weight-bold text-secondary" style={{ fontSize: '40px' }}>
            <i className="flaticon-043-teddy-bear"></i>
            <span className="text-primary">ٍSchool Contracts</span>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav ml-auto">
              <li className="menu-active">
                {" "}
                <Link className="nav-item nav-link" to="/">
                  Home
                </Link>
              </li>

              {sessionStorage.getItem("username") !== null  ? (
                <>
                  <li>
                    <Link className="nav-item nav-link" to="/ContractType">
                      Contarcts
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="/User/UserProfile">
                      {sessionStorage.getItem("username")}{" "}
                      </Link>
                  </li>
                  <li>
                  <Link className="nav-item nav-link" to="/User/UserProfile">
                    <span class="material-symbols-outlined">
                      person
                    </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="logout nav-item nav-link" to="/" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="nav-item nav-link" to="/SignUp">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link" to="/Login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
