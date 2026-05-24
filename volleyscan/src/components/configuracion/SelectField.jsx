import React from 'react';

const SelectField = ({ id, label, value, onChange, options, size = 'md' }) => {
  return (
    <div className="setting-row">
      {label && <label className="setting-label" htmlFor={id}>{label}</label>}
      <div className={`select-wrap ${size === 'sm' ? 'select-wrap--sm' : ''}`}>
        <select 
          id={id} 
          className="field-select" 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <i className="fa-solid fa-chevron-down select-icon"></i>
      </div>
    </div>
  );
};

export default SelectField;