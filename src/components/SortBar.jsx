import React from 'react';

const SortBar = ({ onSortChange }) => {
  const handleChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <h2>Sort Bar</h2>
      <label htmlFor="sort">Sort by class:</label>
      <select id="sort" onChange={handleChange}>
        <option value="">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
    </div>
  );
};

export default SortBar;
