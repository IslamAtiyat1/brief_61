import { Link } from 'react-router-dom';
const Header = () => {
    return ( 
      <header role="banner">
        <h1>Admin Panel</h1>
        <ul className="utilities">
          <br />
          <li className="users"><a href="{}">My Account</a></li>
          <li className="logout warn"></li>
        </ul>
      </header>
    );
  }
   
  export default Header;
  