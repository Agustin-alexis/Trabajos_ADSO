import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  const colors = { success: '#22c55e', error: '#ef4444', info: '#3b82f6' };

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const toastStyle = {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    background: '#1a2235',
    color: '#e2e8f0',
    border: `1px solid ${colors[type] || colors.success}`,
    borderRadius: '10px',
    padding: '12px 20px',
    fontSize: '.85rem',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '500',
    boxShadow: '0 8px 24px rgba(0,0,0,.4)',
    zIndex: 9999,
    maxWidth: '320px',
  };

  return (
    <div id="vs-toast" role="status" aria-live="polite" style={toastStyle}>
      {message}
    </div>
  );
};

export default Toast;