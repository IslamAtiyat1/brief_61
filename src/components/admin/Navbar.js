import React from 'react';

const Navbar = () => {
  return (
    <nav role='navigation'>
  <ul className="main">
    <li className="dashboard"><a href="admindashboard">Dashboard</a></li>
    <li className="edit"><a href="#">Edit Website</a></li>
    <li className="write"><a href="#">Write news</a></li>
    <li className="comments"><a href="#">Ads</a></li>
    <li className="users"><a href="#">Manage Users</a></li>
  </ul>
</nav>
  );
}

export default Navbar;
