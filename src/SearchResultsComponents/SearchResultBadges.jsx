import React from 'react';

const SearchResultBadges = () => {
    return (
        <div>
            <div className='flex flex-wrap space-x-4 mt-8'> {/* Flex container with wrap for badges */}
                <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 text-sm font-medium text-black bg-[#E0E0D3]">
                    Mumbai
                    <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" aria-label="Remove">
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">close</span>
                    </button>
                </span>
                
                <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 text-sm font-medium text-black bg-[#E0E0D3]">
                    Pune
                    <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" aria-label="Remove">
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">close</span>
                    </button>
                </span>
                
                <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 text-sm font-medium text-black bg-[#E0E0D3]">
                    RCC
                    <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" aria-label="Remove">
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">close</span>
                    </button>
                </span>
                
                <span id="badge-dismiss-dark" className="inline-flex items-center px-2 py-1 text-sm font-medium text-black bg-[#E0E0D3]">
                    Verified Vendor
                    <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300" aria-label="Remove">
                        <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">close</span>
                    </button>
                </span>
            </div>

            {/* Clear All Filters Button */}
            <div className="flex justify-end mb-4 mt-4"> {/* Added mt-4 for spacing from badges */}
                <span className="text-base font-semibold text-[#4E4E4E] underline">
                    <button>Clear All Filters</button>
                </span>
            </div>
        </div>
    );
}

export default SearchResultBadges;
