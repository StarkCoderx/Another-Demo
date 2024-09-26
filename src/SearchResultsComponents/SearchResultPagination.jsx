import React from 'react';

const SearchResultPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className='flex justify-end items-center space-x-4'>
      {/* Previous Page Button */}
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        <img 
          src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" 
          alt="Previous" 
          className='rotate-90' 
        />
      </button>

      {/* Page Number Buttons */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button 
            key={page} 
            onClick={() => handlePageChange(page)} 
            className={`border border-black px-3 py-1 ${currentPage === page ? 'bg-black text-white' : ''}`}
          >
            {page}
          </button>
        );
      })}

      {/* Next Page Button */}
      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        <img 
          src="https://storagereponeevaydevcdn.blob.core.windows.net/business/dropdown_arrow.svg" 
          alt="Next" 
          style={{ transform: 'rotate(270deg)' }} 
        />
      </button>
    </div>
  );
};

export default SearchResultPagination;
