import { Outlet, Link } from "react-router-dom";
import React from 'react';

function UserNav() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/User/UserUpdate" className="nav-link">User Update</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/User/UserProfile" className="nav-link">User Profile</Link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default UserNav;
