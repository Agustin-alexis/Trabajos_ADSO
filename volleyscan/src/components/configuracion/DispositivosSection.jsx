import React from 'react';
import DeviceItem from './DeviceItem';

const DispositivosSection = ({ devices, onRemoveDevice, onLogoutAll, openModal }) => {
  const handleRemoveDevice = (device) => {
    openModal(`¿Cerrar sesión en ${device.name}?`, () => {
      onRemoveDevice(device.id);
    });
  };

  const handleLogoutAll = () => {
    openModal('¿Cerrar sesión en todos los dispositivos?', onLogoutAll);
  };

  return (
    <section className="config-section" aria-labelledby="title-dispositivos">
      <h2 className="config-section__title" id="title-dispositivos">Dispositivos conectados</h2>

      <ul className="device-list" role="list">
        {devices.map((device) => (
          <DeviceItem 
            key={device.id}
            device={device}
            onRemove={() => handleRemoveDevice(device)}
          />
        ))}
      </ul>

      <div className="form-actions" style={{ marginTop: '20px' }}>
        <button className="btn btn--danger-outline" type="button" onClick={handleLogoutAll}>
          <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión en todos los dispositivos
        </button>
      </div>
    </section>
  );
};

export default DispositivosSection;