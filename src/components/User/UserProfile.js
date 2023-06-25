import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserNav from './UserNav';
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

export default function UserProfile() {
  const [user, setUser] = useState({});
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    getUser();
    getContracts();}, []);
    
  const userId = sessionStorage.getItem('user_id');

  function getUser() {
    axios.get(`http://localhost/api_breef6/User/user/${userId}`).then(function (response) {
      console.log(response.data);
      setUser(response.data);
    });
  }


  function getContracts() {
    axios.get(`http://localhost/api_breef6/Contract/contracts/${userId}`).then(function (response) {
      console.log(response.data);
      setContracts(response.data);
    });
  }

  return (
    <>
    <Navbar/>
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <UserNav />

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                />
                <p className="text-muted mb-1">{user.name}</p>
                {/* <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                <div className="d-flex justify-content-center mb-2">
                  <Link to="/User/UserUpdate" className="btn btn-primary">
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div>
                  <div className="row">
                    <div className="col-sm-3">
                      <p>Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted">{user.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p>Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted">{user.phone}</p>
                    </div>
                  </div>
                
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
  {contracts.map((contract, index) => {
    const expirationDate = new Date(contract.exprtion_date);
    const today = new Date();
    const timeDifference = expirationDate.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    let cardHeaderClass = 'card-header';
    let cardFoteerClass = 'card-footer';


    if (daysDifference < 10) {
      cardHeaderClass += ' bg-warning';
      cardFoteerClass += ' bg-warning';
    }

    if (daysDifference < 3) {
      cardHeaderClass += ' bg-danger';
      cardFoteerClass += ' bg-danger';

    }

    return (
      <div key={index} className="col-lg-4 mb-4">
        <div className="card">
          <div className={cardHeaderClass}>
            <h3 className="card-title">Contract {contract.contract_name}</h3>
          </div>
        <div className="card-body">
          <p className="card-text"><strong>Signing Date:</strong> {contract.Signing_date}</p>
          <p className="card-text"><strong>Expiration Date:</strong> {contract.exprtion_date}</p>
          <p className="card-text"><strong>Total Cost:</strong> {contract.total_cost}</p>
          <p className="card-text"><strong>Warranty Start Date:</strong> {contract.warranty_start_date}</p>
          <p className="card-text"><strong>Warranty End Date:</strong> {contract.warranty__end_date}</p>
          <p className="card-text"><strong>Company Name:</strong> {contract.company_name}</p>
          <p className="card-text"><strong>Address:</strong> {contract.address}</p>
          <p className="card-text"><strong>Company Phone:</strong> {contract.company_phone}</p>
          <p className="card-text"><strong>Liaison Officer Name:</strong> {contract.liaison_officer_name}</p>
          <p className="card-text"><strong>Status:</strong> {contract.status}</p>
          <p className="card-text"><strong>Employee ID:</strong> {contract.employee_id}</p>
        </div>
          <div className={cardFoteerClass}>
            <hr className="mt-0" />
          </div>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
