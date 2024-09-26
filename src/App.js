import React, { useState, useEffect, useCallback } from 'react';
import vendorData from './SearchResultsComponents/vendorData.json'; // Importing vendor data
import SearchResultNavbar from './SearchResultsComponents/SearchResultNavbar';
import SearchResults from './SearchResultsComponents/SearchResults';
import SearchResultText from './SearchResultsComponents/SearchResultText'; // Importing SearchResultText
import Modal from 'react-modal';
import FilterTips from './SearchResultsComponents/FilterTips'; // Importing FilterTips



const vendorsPerPage = 5; // Number of vendors to show per page

function App() {
  const [filteredVendors, setFilteredVendors] = useState(vendorData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showVerified, setShowVerified] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVendorType, setSelectedVendorType] = useState(''); // New state for vendor type

  const filterVendors = useCallback(() => {
    let results = vendorData.filter(vendor => {
      const matchesServices = vendor.services.some(service => 
        service.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCity = selectedCity ? vendor.officeAddress.toLowerCase() === selectedCity.toLowerCase() : true;
      const matchesVerified = showVerified ? vendor.verified : true;
      const matchesVendorType = selectedVendorType ? vendor.type.toLowerCase() === selectedVendorType.toLowerCase() : true; // Vendor type matching
      return matchesServices && matchesCity && matchesVerified && matchesVendorType;
    });
    setFilteredVendors(results);
  }, [searchTerm, selectedCity, showVerified, selectedVendorType]);

  useEffect(() => {
    filterVendors();
  }, [filterVendors]);

  const openModal = (vendor) => {
    setSelectedVendor(vendor);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVendor(null);
  };

  // Pagination Logic
  const indexOfLastVendor = currentPage * vendorsPerPage;
  const indexOfFirstVendor = indexOfLastVendor - vendorsPerPage;
  const currentVendors = filteredVendors.slice(indexOfFirstVendor, indexOfLastVendor);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render pagination buttons
  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredVendors.length / vendorsPerPage); i++) {
      pageNumbers.push(i);
    }
    // return (
    //   <div className="flex justify-center mt-4">
    //     {pageNumbers.map(number => (
    //       <button 
    //         key={number} 
    //         onClick={() => paginate(number)} 
    //         className="mx-1 p-2 border border-gray-300 rounded hover:bg-gray-200"
    //       >
    //         {number}
    //       </button>
    //     ))}
    //   </div>
    // );
  };

  return (
    <div>
      <SearchResultNavbar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        setSelectedVendorType={setSelectedVendorType} // Pass the function to update vendor type
        totalResults={filteredVendors.length} 
      />
      <SearchResultText searchTerm={searchTerm} totalResults={filteredVendors.length} />
      <FilterTips selectedCity={selectedCity} showVerified={showVerified} />
      <SearchResults vendors={currentVendors} onViewContact={openModal} />
      {renderPagination()} {/* Render pagination buttons */}
      
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Contact Information</h2>
        {selectedVendor && (
          <div>
            <p>Name: {selectedVendor.name}</p>
            <p>Office Address: {selectedVendor.officeAddress}</p>
            <p>City: {selectedVendor.city}</p>
            <p>Services: {selectedVendor.services.join(', ')}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>

      
    </div>
  );
}

export default App;
