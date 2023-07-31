import { Outlet, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function logout() {
    sessionStorage.clear();
    navigate("/");

  }
  return (

    <header role="banner">
      <h1>Admin Panel</h1>
      <ul className="utilities">
        <br />

        <li className="logout warn">
          <Link className="nav-item nav-link">
            {sessionStorage.getItem("username")}{" "}
          </Link>
          
        </li>
        <li><Link className="logout nav-item nav-link" to='/' onClick={logout}>
            Logout
          </Link></li>
      </ul>
    </header>
  );
}

export default Header;
