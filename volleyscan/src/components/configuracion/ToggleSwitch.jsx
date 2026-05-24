import React from 'react';

const ToggleSwitch = ({ id, checked, onChange, label, description, 'aria-label': ariaLabel }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
    if (label && !onChange) {
      const state = e.target.checked ? 'activado' : 'desactivado';
      // El toast se manejaría desde el padre
    }
  };

  return (
    <div className="setting-row setting-row--toggle">
      {(label || description) && (
        <div className="setting-row__info">
          {label && <p className="setting-label">{label}</p>}
          {description && <p className="setting-desc">{description}</p>}
        </div>
      )}
      <label className="toggle-switch" aria-label={ariaLabel || label}>
        <input 
          type="checkbox" 
          id={id}
          checked={checked} 
          onChange={handleChange} 
        />
        <span className="toggle-thumb"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;