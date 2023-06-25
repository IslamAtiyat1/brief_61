import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav role='navigation'>
  <ul className="main">
    {/* <li className="dashboard">< Link to="/Main">Dashboard</Link ></li> */}
    <li className="edit">< Link to="/ListUser" >user</Link></li>
    <li className="edit">< Link to="/ListCompny" >compney</Link></li>
    
              
  </ul>
</nav>
  );
}

export default Navbar;
