import React from 'react';
import { Link } from "react-router-dom";

const PopularClasses = () => {
  if (sessionStorage.getItem("username") !== null) {
    return (
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Our Contract</span></p>
            <h1 className="mb-4">Classes for Your Kids</h1>
          </div>
          <div className="row">
            <div className="col-lg-12 mb-5 mx-auto text-center">
              <div className="card border-0 bg-light shadow-sm pb-2 text-center">
                <img className="card-img-top mb-2" src="img/class-2.jpg" alt="" />
                <div className="card-body">
                  <h4 className="card-title">choose your Contract </h4>
                  <p className="card-text"></p>
                </div>
                <div className="card-footer bg-transparent py-4 px-5 text-center">
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right text-center"><strong>Age of Kids</strong></div>
                    <div className="col-6 py-1">3 - 6 Years</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right text-center"><strong>Total Seats</strong></div>
                    <div className="col-6 py-1">40 Seats</div>
                  </div>
                  <div className="row border-bottom">
                    <div className="col-6 py-1 text-right border-right text-center"><strong>Class Time</strong></div>
                    <div className="col-6 py-1">08:00 - 10:00</div>
                  </div>
                  {/* <div className="row">
                    <div className="col-6 py-1 text-right border-right text-center"><strong> Fee</strong></div>
                    <div className="col-6 py-1">$290 / Month</div>
                  </div> */}
                </div>
                <button className="btn px-3 mx-auto mb-4 btn-sm">
                  <Link to="/ContractType" className="btn px-3 mx-auto mb-4 btn-sm">For more details</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null; // Render null or any alternative content if user is not logged in
  }
};

export default PopularClasses;
