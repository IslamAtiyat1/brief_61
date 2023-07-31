import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "datatables.net-bs4";
import "datatables.net-select-bs4";
import Navbar from "../Navbar";
import Header from "../Header";

export default function ListCompany() {
  const [contracts, setContracts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [contractsPerPage] = useState(10);
  const [selectedStatus, setSelectedStatus] = useState("");
  const tableRef = useRef(0);

  useEffect(() => {
    getContracts();
  }, []);

  function getContracts() {
    axios
      .get("http://localhost/api_breef6/AdminCont/contract")
      .then(function (response) {
        setContracts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  }

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleStatusChange(event) {
    setSelectedStatus(event.target.value);
  }

 

 // Function to update the contract status
const updateStatus = (contractId, status) => {
  // Make an API request to update the contract status
  fetch(`http://localhost/api_breef6/AdminCont/contracts/${contractId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contract_id: contractId, status: status })
  })
    .then(response => {
      if (response.ok) {
        // Contract status updated successfully
        console.log('Contract status updated successfully');
        // You can update the UI or perform any other necessary actions
      } else {
        throw new Error('Failed to update contract status');
      }
    })
    .catch(error => {
      // Handle the error if needed
      console.error('Failed to update contract status', error);
    });
};

  
const filteredContracts = contracts
.filter((contract) => {
  if (selectedStatus === "") {
    return true;
  } else {
    return contract.status === selectedStatus;
  }
})
.filter((contract) => {
  if (searchQuery === "") {
    return true;
  } else {
    const searchValue = searchQuery.toLowerCase();
    return (
      contract.contract_name.toLowerCase().includes(searchValue) ||
      contract.company_name.toLowerCase().includes(searchValue) ||
      contract.address.toLowerCase().includes(searchValue)
    );
  }
});

const indexOfLastContract = currentPage * contractsPerPage;
const indexOfFirstContract = indexOfLastContract - contractsPerPage;
const currentContracts = filteredContracts.slice(
indexOfFirstContract,
indexOfLastContract
);

  return (
    <div>
      <Header />
      <Navbar />
      <div
        className="container"
        style={{
          marginRight: "120px",
          paddingRight: "4px",
          marginTop: "100px",
          paddingLeft: "40px",
        }}
      >
        {/* <p  className="alert alert-info   "  > {message}</p>  */}
        <div className="mb-3">
        <input
            type="text"
            style={{ marginLeft: "20px" }}
            className="form-control"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <select
          className="form-select"
          style={{ marginLeft: "20px" }}
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          <option value="">All Status</option>
          <option value="WAITING">Waiting</option>
          <option value="EXPIRED">Expired</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>
        <table
          className="table table-info table-striped table-bordered"
          ref={tableRef}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Signing Date</th>
              <th>Expiration Date</th>
              <th>Total Cost</th>
              <th>Amount</th>
              <th>Items</th>
              <th>Legal Officer Name</th>
              <th>Company Name</th>
              <th>Address</th>
              <th>Company Phone</th>
              <th>Liaison Officer Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentContracts.map((contract, key) => (
              <tr key={key}>
                <td>{contract.contract_name}</td>
                <td>{contract.Signing_date}</td>
                <td>{contract.exprtion_date}</td>
                <td>{contract.total_cost}</td>
                <td>{contract.amount}</td>
                <td>{contract.items}</td>
                <td>{contract.Legal_officer_name}</td>
                <td>{contract.company_name}</td>
                <td>{contract.address}</td>
                <td>{contract.company_phone}</td>
                <td>{contract.liaison_officer_name}</td>
                <td>
  {contract.status === "WAITING" ? (
    <>
      <button
        onClick={() => updateStatus(contract.contract_id, "APPROVED")}
        disabled={contract.status !== "WAITING"}
        className="btn btn-dark"
      >
        Approve
      </button>
      <button
        onClick={() => updateStatus(contract.contract_id, "REJECTED")}
        disabled={contract.status !== "WAITING"}
        className="btn btn-gray"
      >
        Reject
      </button>
    </>
  ) : (
    <span>{contract.status}</span>
  )}
</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              {Array.from({
                length: Math.ceil(filteredContracts.length / contractsPerPage),
              }).map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                 
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}  
