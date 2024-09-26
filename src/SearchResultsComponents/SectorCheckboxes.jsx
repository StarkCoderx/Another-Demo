import React, { useState } from 'react';

const sectors = [
  'Healthcare',
  'Industrial',
  'Infrastructure',
  'Residential',
  'Commercial',
  'Hospitals',
];

const SectorCheckboxes = () => {
  const [checkedSectors, setCheckedSectors] = useState(
    new Array(sectors.length).fill(false) // Initialize all sectors as unchecked
  );

  const handleCheckboxChange = (index) => {
    const updatedCheckedSectors = checkedSectors.map((checked, i) => 
      i === index ? !checked : checked // Toggle the checked state of the clicked checkbox
    );
    setCheckedSectors(updatedCheckedSectors);
  };

  return (
    <div className="flex flex-col">
      {sectors.map((sector, index) => (
        <label key={index} className="flex items-center text-left text-sm pl-2">
          <input
            type="checkbox"
            checked={checkedSectors[index]}
            onChange={() => handleCheckboxChange(index)}
            className="mr-2"
          />
          {sector}
        </label>
      ))}
    </div>
  );
};

export default SectorCheckboxes;
