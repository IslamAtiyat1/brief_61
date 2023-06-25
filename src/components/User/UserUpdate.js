import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserNav from './UserNav';
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

export default function UserUpdate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const userId = sessionStorage.getItem('user_id') ;
  // get user id from sessions storage this is javascript not php session

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/api_breef6/User/users/${userId}`).then(function (response) {
      console.log(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setPhoneNumber(response.data.phone);
      setAddress(response.data.address);
    
    });
  }


  function handleSubmit(event) {
    event.preventDefault();
    // Perform update user API request
    axios.put(`http://localhost/api_breef6/User/user/${userId}`, {
      name,
      email,
      phone_number: phoneNumber,
      address
    })
      .then(function (response) {
        console.log(response.data);
        // Handle successful response
      })
      .catch(function (error) {
        console.log(error);
        // Handle error
      });
  }

  return (
    <>
     <Navbar/>
    <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <UserNav />

        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-body">
                <h4 className="mb-4">Update Profile</h4>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
