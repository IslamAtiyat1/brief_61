import React, { useState } from 'react';
import team1 from '../../assets/img/team-1.jpg';
import team2 from '../../assets/img/team-2.jpg';
import team3 from '../../assets/img/team-3.jpg';
import team4 from '../../assets/img/team-4.jpg';
// import { Link } from 'react-router-dom';


//  import './styles/style.css';
import './Employee.css';
const EmployeePage = () => {
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
    {/* <button
    onClick={togglePopup}
    className="btn-modal">
      Open
    </button> */}
 {showPopup && (
  <div className="modal">
    <div onClick={togglePopup} className="overlay"></div>
    <div className="modal-content">
      <h2>Hello Modal</h2>
      <div className="card">
        <div className="card-body">
          <i className="fa fa-pen fa-xs edit"></i>
          <table style={{ margin: '0 auto', textAlign: 'center' }}>
  <tbody>
    <tr>
      <td style={{ fontWeight: 'bold', justifyContent: 'center' }}>Name</td>
      <td>:</td>
      <td style={{ justifyContent: 'center' }}>ImDezCode</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold', justifyContent: 'center' }}>Email</td>
      <td>:</td>
      <td style={{ justifyContent: 'center' }}>imdezcode@gmail.com</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold', justifyContent: 'center' }}>Address</td>
      <td>:</td>
      <td style={{ justifyContent: 'center' }}>Bali, Indonesia</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold', justifyContent: 'center' }}>Hobbies</td>
      <td>:</td>
      <td style={{ justifyContent: 'center' }}>Diving, Reading Book</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold', justifyContent: 'center' }}>Job</td>
      <td>:</td>
      <td style={{ justifyContent: 'center' }}>Web Developer</td>
    </tr>
    <tr>
      <td style={{ fontWeight: 'bold', justifyContent: 'center' }}>Skill</td>
      <td>:</td>
      <td style={{ justifyContent: 'center' }}>PHP, HTML, CSS, Java</td>
    </tr>
  </tbody>
</table>


        </div>
      </div>
      <button className="close-modal" onClick={togglePopup}>
        CLOSE
      </button>
      <button className="close-modal" onClick={togglePopup}>
      {/* <Link to="/contract">Go to Contract Page</Link> */}
      </button>
    </div>
  </div>
)}

      
     
        <div>
   

      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5"><span className="px-2">Our Teachers</span></p>
            <h1 className="mb-4">Meet Our Teachers</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={team1} alt="" onClick={togglePopup} />
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>
            
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={team2} alt="" onClick={togglePopup} />
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={team3} alt="" onClick={togglePopup} />
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>
            <div className="col-md-6 col-lg-3 text-center team mb-5">
              <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                <img className="img-fluid w-100" src={team4} alt="" onClick={togglePopup} />
              </div>
              <h4>Julia Smith</h4>
              <i>Music Teacher</i>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default EmployeePage;
