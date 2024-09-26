import React from 'react';
import SearchResultSearchbar from './SearchResultSearchbar';

const SearchResultNavbar = ({ searchTerm, setSearchTerm, setSelectedVendorType }) => {
    return (
        <div>
            {/* Navbar */}
            <nav className='bg-cover fixed top-0 w-full bg-white z-20 shadow-md'>
                <div className='flex justify-between items-center h-[90px] px-4 md:px-10 lg:px-20'>
                    {/* Logo */}
                    <div>
                        <img 
                            src="https://storagereponeevaydevcdn.blob.core.windows.net/business/homepage_4_neevayLogo.svg" 
                            alt="Neevay" 
                            className='w-[140px] h-[40px] md:h-[50px]' 
                        />
                    </div>

                    {/* Searchbar (Only visible on larger screens) */}
                    <div className='hidden lg:block'>
                        <SearchResultSearchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    </div>

                    {/* Vendor Type Selection */}
                    

                    {/* Buttons */}
                    <div className='flex items-center'>
                        <button className='h-[44px] w-[100px] md:w-[108px] text-sm mx-2 border hover:font-bold border-black' disabled>
                            Login
                        </button>
                        <button className='h-[44px] w-[135px] flex items-center justify-center text-sm text-white hover:font-bold bg-gradient-to-r from-[#24242D] to-[#0B0B1A] border-l-4 border-[#F16500]' disabled>
                            Signup
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default SearchResultNavbar;
