// FilterTips.js
import React from 'react';

const FilterTips = ({ selectedCity, showVerified }) => (
  <div>
    {selectedCity && <p>City Filter: {selectedCity}</p>}
    {showVerified && <p>Showing Verified Vendors</p>}
  </div>
);

export default FilterTips;
