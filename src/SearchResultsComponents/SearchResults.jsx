import React, { useState } from 'react';
import SearchResultNavbar from './SearchResultNavbar';
import SearchResultCards from './SearchResultCards'; 
import SearchResultFilters from './SearchResultFilters';
// import SearchResultFooter from './SearchResultFooter';
import SearchResultPagination from './SearchResultPagination';
import vendorData from './vendorData.json'; 

const SearchResults = () => {
    const [filtersClicked, setFiltersClicked] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const handleFilters = () => {
        setFiltersClicked(!filtersClicked);
    }

    // Calculate the index of the first and last item
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Slice the vendor data for current page
    const currentItems = vendorData.slice(indexOfFirstItem, indexOfLastItem);

    // Total pages calculation
    const totalPages = Math.ceil(vendorData.length / itemsPerPage);

    // Function to change page
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className='max-w-[1280px] mx-auto flex flex-col h-screen'>
            <style>
                {`
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE 10+ */
                    scrollbar-width: none; /* Firefox */
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none; /* Chrome, Safari */
                }
                `}
            </style>

            {/* Navbar */}
            <div className="sticky top-0 z-10 bg-white shadow-md">
                <SearchResultNavbar />
            </div>

            {/* Main Content */}
            <div className="flex-grow pt-[90px] flex">
                {/* Filters Section */}
                {filtersClicked && (
                    <div className="w-1/4 p-4 bg-gray-50 border rounded-lg shadow-lg h-full">
                        <button 
                            onClick={handleFilters} 
                            className="mb-4 text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Hide Filters
                        </button>

                        <SearchResultFilters />
                    </div>
                )}

                {/* Search Results Section */}
                <div className={`flex-1 h-full p-4 bg-white rounded-lg shadow-lg`}>
                    {!filtersClicked && (
                        <button 
                            onClick={handleFilters} 
                            className="mb-4 text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                        >
                            Show Filters
                        </button>
                    )}

                    <SearchResultCards vendors={currentItems} /> {/* Pass the currentItems to your cards */}
                </div>
            </div>
            
            {/* Pagination */}
            <div className="py-8 px-6 bg-gray-50">
                <SearchResultPagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                />
            </div>

            {/* Footer */}
            {/* <div className="bg-white pt-8 pb-4 border-t">
                <SearchResultFooter />
            </div> */}
        </div>
    );
}

export default SearchResults;
