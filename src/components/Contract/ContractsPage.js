import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contract.css';
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

const ContractPage = () => {
  const [contracts, setContracts] = useState([]);
  const [user, setUser] = useState({});
  const [newContract, setNewContract] = useState({
    contract_id: '',
    contract_name: '',
    Signing_date: '',
    exprtion_date: '',
    total_cost: '',
    amount: '',
    items: '',
    Legal_officer_name: '',
    warranty_start_date: '',
    warranty__end_date: '',
    company_name: '',
    address: '',
    company_phone: '',
    liaison_officer_name: '',
    status: '',
    user_id: '',
    employee_id: '',
  });
  const [companyDetails, setCompanyDetails] = useState({
    company_name: '',
    address: '',
    company_phone: '',
    liaison_officer_name: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [showCompanyDetails, setShowCompanyDetails] = useState(false);
  const [showUserData, setShowUserData] = useState(false);
  const [selectedContract, setSelectedContract] = useState(null);
  const [employeeList, setEmployeeList] = useState([]);
  const userId = sessionStorage.getItem('user_id');
  const user_id = sessionStorage.getItem('user_id');
  const [User, UserSet] = useState(user_id)

  useEffect(() => {

    axios
      .get(`http://localhost/api_breef6/User/user/${userId}`)
      .then(function (response) {
        console.log(response.data);
        setUser(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching user data:', error);
      });

    axios
      .get('http://localhost/employee.php/')
      .then(function (response) {
        console.log(response.data);
        setEmployeeList(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const addContract = () => {
    const contract = {
      ...newContract,
      Signing_date: newContract.Signing_date,
      exprtion_date: newContract.exprtion_date,
      total_cost: newContract.total_cost,
      amount: newContract.amount,
      items: newContract.items,
      Legal_officer_name: newContract.Legal_officer_name,
      warranty_start_date: newContract.warranty_start_date,
      warranty__end_date: newContract.warranty__end_date,
      company_name: newContract.company_name,
      address: newContract.address,
      company_phone: newContract.company_phone,
      liaison_officer_name: newContract.liaison_officer_name,
      status: newContract.status,
      user_id: User,
      employee_id: newContract.employee_id,
    };
    axios
      .post(`http://localhost/api_breef6/Contract/contracts/${userId}`, contract)
      .then((response) => {
        // Handle the response from the API
        console.log(response.data); // You can customize this based on your API response

        // Update the contracts state with the new contract
        setContracts([...contracts, contract]);

        // Reset the form fields
        setNewContract({
          contract_id: '',
          contract_name: '',
          Signing_date: '',
          exprtion_date: '',
          total_cost: '',
          amount: '',
          items: '',
          Legal_officer_name: '',
          warranty_start_date: '',
          warranty__end_date: '',
          company_name: '',
          address: '',
          company_phone: '',
          liaison_officer_name: '',
          status: '',
          user_id: '',
          employee_id: '',
        });
        setCompanyDetails({
          company_name: '',
          address: '',
          company_phone: '',
          liaison_officer_name: '',
        });
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error adding contract:', error);
      });
  };
  const toggleCompanyDetails = () => {
    setShowCompanyDetails(!showCompanyDetails);
  };

  const toggleShowModal = (contract) => {
    setSelectedContract(contract);
    setShowModal(!showModal);
  };

  const toggleShowUserData = () => {
    setShowUserData(!showUserData);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const buttonStyle = {

    fontSize: '14px',
    padding: '4px 15px',
    borderRadius: '4px',
    fontWeight: 'bold',
    margin: 'auto',
    border: 'solid 2px black',
    height: '50px',
    width: '120px',
    // text-align:'center',

  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        {showModal && selectedContract && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="d-flex justify-content-end">
                <button className="btn btn-danger" onClick={toggleShowModal}>
                  Close
                </button>
              </div>
              <h3 className="modal-title">Contract Details</h3>
              <h3 className="modal-title">{selectedContract.contract_id}</h3>
              <p className="modal-details">Contract Name: {selectedContract.contract_name}</p>
              <p className="modal-details">Signing Date: {selectedContract.Signing_date}</p>
              <p className="modal-details">Expiration Date: {selectedContract.exprtion_date}</p>
              <p className="modal-details">Total Cost: {selectedContract.total_cost}</p>
              <p className="modal-details">Legal Officer Name: {selectedContract.Legal_officer_name}</p>
              <p className="modal-details">Warranty Start Date: {selectedContract.warranty_start_date}</p>
              <p className="modal-details">Warranty End Date: {selectedContract.warranty__end_date}</p>
              <p className="modal-details">Status: {selectedContract.status}</p>
            </div>
          </div>
        )}
        {showCompanyDetails && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="d-flex justify-content-end">
                <button className="btn btn-danger" onClick={toggleCompanyDetails}>
                  Close
                </button>
              </div>

              <h3 className="modal-title">Company Details</h3>
              <p className="modal-details">Company Name: {companyDetails.company_name}</p>
              <p className="modal-details">Location: {companyDetails.address}</p>
              <p className="modal-details">Liaison Officer: {companyDetails.liaison_officer_name}</p>
              <p className="modal-details">Contact Information: {companyDetails.company_phone}</p>
            </div>
          </div>
        )}
        {showUserData && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="d-flex justify-content-end">
                <button className="btn btn-danger" onClick={toggleShowUserData}>
                  Close
                </button>
              </div>
              <h3 className="modal-title">User Data</h3>
              {user && (
                <div>
                  <p className="modal-details">User ID: {user.id}</p>
                  <p className="modal-details">Name: {user.name}</p>
                  <p className="modal-details">Email: {user.email}</p>
                  <p className="modal-details">Role: {user.role}</p>
                </div>
              )}
            </div>
          </div>
        )}
        <h1 className="text-center mb-4">Contract Management System</h1>
        <div className="row mb-4">
          <div className="col-md-12">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Contract Title"
              value={newContract.contract_name}
              onChange={(e) => setNewContract({ ...newContract, contract_name: e.target.value })}
            />
            <input
              type="date"
              className="form-control mb-2"
              placeholder="Signing Date"
              value={newContract.Signing_date}
              onChange={(e) => setNewContract({ ...newContract, Signing_date: e.target.value })}
            />
            <input
              type="date"
              className="form-control mb-2"
              placeholder="Expiration Date"
              value={newContract.exprtion_date}
              onChange={(e) => setNewContract({ ...newContract, exprtion_date: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Total Cost"
              value={newContract.total_cost}
              onChange={(e) => setNewContract({ ...newContract, total_cost: e.target.value })}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Amount"
              value={newContract.amount}
              onChange={(e) => setNewContract({ ...newContract, amount: e.target.value })}
            />

            <input
              type="text"
              className="form-control mb-2"
              placeholder="Items"
              value={newContract.items}
              onChange={(e) => setNewContract({ ...newContract, items: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Legal officer name"
              value={newContract.Legal_officer_name}
              onChange={(e) => setNewContract({ ...newContract, Legal_officer_name: e.target.value })}
            />
            <input
              type="date"
              className="form-control mb-2"
              placeholder="Warranty start date"
              value={newContract.warranty_start_date}
              onChange={(e) => setNewContract({ ...newContract, warranty_start_date: e.target.value })}
            />
            <input
              type="date"
              className="form-control mb-2"
              placeholder="Warranty end date"
              value={newContract.warranty__end_date}
              onChange={(e) => setNewContract({ ...newContract, warranty__end_date: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Company Name"
              value={newContract.company_name}
              onChange={(e) => setNewContract({ ...newContract, company_name: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Address"
              value={newContract.address}
              onChange={(e) => setNewContract({ ...newContract, address: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Company Phone"
              value={newContract.company_phone}
              onChange={(e) => setNewContract({ ...newContract, company_phone: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Liaison Officer Name"
              value={newContract.liaison_officer_name}
              onChange={(e) => setNewContract({ ...newContract, liaison_officer_name: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Status"
              value="WAITING"
              onChange={(e) => setNewContract({ ...newContract, status: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="User ID"
              value={User}
              onChange={(e) => setNewContract({ ...newContract, user_id: e.target.value })}
            />

            <div>
              <div>
                <select
                  className="form-control mb-2"
                  value={newContract.employee_id}
                  onChange={(e) => setNewContract({ ...newContract, employee_id: e.target.value })}
                >
                  <option value="">Select Employee</option>
                  {employeeList.map((employee) => (
                    <option key={employee.id} value={employee.id}>
                      {employee.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3">
              <button className="btn btn-light btn-sm center" style={buttonStyle} onClick={addContract}>
                Add Contract
              </button>
            </div>


            <div className="col-md-3">
              <button className="btn btn-light btn-sm center" style={buttonStyle} onClick={toggleCompanyDetails}>
                Company Details
              </button>
            </div>


            <div className="col-md-3">
              <button className="btn btn-light btn-sm center" style={buttonStyle} onClick={toggleShowUserData}>
                User Data
              </button>
            </div>


            <div className="col-md-3">
              <button className="btn btn-light btn-sm center" style={buttonStyle} onClick={toggleShowModal}>
                Contract Details
              </button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ContractPage;
