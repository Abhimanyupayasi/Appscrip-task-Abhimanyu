import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";


const filters = [
 
  {
    title: 'Ideal For',
    options: ['Men', 'Women', 'Baby & Kids'],
  },
  {
    title: 'Occasion',
    options: ['Casual', 'Party', 'Work'],
  },
  {
    title: 'Work',
    options: ['Office', 'Daily Wear'],
  },
  {
    title: 'Fabric',
    options: ['Cotton', 'Silk', 'Linen'],
  },
  {
    title: 'Segment',
    options: ['All', 'Premium', 'Budget'],
  },
  {
    title: 'Suitable For',
    options: ['Summer', 'Winter'],
  },
  {
    title: 'Raw Materials',
    options: ['Wool', 'Synthetic', 'Blends'],
  },
  {
    title: 'Pattern',
    options: ['Printed', 'Solid', 'Checked'],
  },
];

function LeftShort() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="left-short-container">
      <div className="filter-customizable">
          <label style={{ display: 'block' }}>
                  <input type="checkbox" /> Customizable
                </label>
          </div>
      {filters.map((filter, index) => (
        <div key={index} className="filter-section">
          <div
            className="filter-header"
            onClick={() => toggleSection(filter.title)}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
          >
            <h4>{filter.title}</h4>
            {openSections[filter.title] ? <FaChevronUp /> : <FaChevronDown />}

            
          </div>
          <p className='all-filter-text'>All</p>
          
          

          {openSections[filter.title] && (
            <div className="filter-options">
                <p className='unselect-options-filter'>Unselect all</p>
              {filter.options.map((opt, i) => (
                <label key={i} style={{ display: 'block' }}>
                  <input type="checkbox" /> {opt}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LeftShort;
