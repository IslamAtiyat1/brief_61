import React, { useState } from 'react';
import Footer from '../landing/Footer'
import Navbar from '../landing/Navbar';
import './Contract.css';
const ContractsPage = () => {
  
  // Mock contract data
  const [contracts, setContracts] = useState([
    {
      id: 1,
      contractName: 'Contract 1',
      signingDate: '2023-06-01',
      expirationDate: '2023-07-01',
      totalCost: 5000,
      legalOfficerName: 'John Doe',
      employeeNumber: '12345',
      // Other contract details...
    },
    // More contracts...
  ]);

  // Filter and search state
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContracts, setFilteredContracts] = useState(contracts);

  // Handle search input change
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    filterContracts(e.target.value);
  };

  // Filter contracts based on search term
  const filterContracts = (term) => {
    const filtered = contracts.filter((contract) =>
      contract.contractName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredContracts(filtered);
  };

  // Render contract grid
  const renderContractGrid = () => {
    if (filteredContracts.length === 0) {
      return <p>No contracts found.</p>;
    }

    return filteredContracts.map((contract) => (
      <div className="contract-card" key={contract.id}>
        <h3>{contract.contractName}</h3>
        <p>Signing Date: {contract.signingDate}</p>
        <p>Expiration Date: {contract.expirationDate}</p>
        <p>Total Cost: ${contract.totalCost}</p>
        <p>Legal Officer: {contract.legalOfficerName}</p>
        <p>Employee Number: {contract.employeeNumber}</p>
        {/* Add buttons and logic for Contract Details, Company Details, and Delete Contract */}
      </div>
    ));
  };

  return (
    <div>
        <Navbar/>
      <h1>Contracts</h1>
      <input
        type="text"
        placeholder="Search contracts..."
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <div className="contract-grid">{renderContractGrid()}</div>
      <Footer/>
    </div>
 
  );
};

export default ContractsPage;
