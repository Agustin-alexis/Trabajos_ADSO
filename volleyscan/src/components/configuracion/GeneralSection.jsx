import React, { useState } from 'react';
import SelectField from './SelectField';
import ToggleSwitch from './ToggleSwitch';

const GeneralSection = ({ config, privacidadConfig, onSave, onLogout, showToast }) => {
  const [formData, setFormData] = useState(config);
  const [privacidadData, setPrivacidadData] = useState(privacidadConfig);

  const unidadOptions = [
    { value: 'metric', label: 'Métrico (kg, cm)' },
    { value: 'imperial', label: 'Imperial (lb, ft)' },
  ];

  const idiomaOptions = [
    { value: 'es', label: 'Español' },
    { value: 'en', label: 'English' },
    { value: 'pt', label: 'Português' },
    { value: 'fr', label: 'Français' },
  ];

  const temaOptions = [
    { value: 'dark', label: 'Oscuro' },
    { value: 'light', label: 'Claro' },
    { value: 'auto', label: 'Automático' },
  ];

  const calidadOptions = [
    { value: 'alta', label: 'Alta' },
    { value: 'media', label: 'Media' },
    { value: 'baja', label: 'Baja' },
    { value: 'auto', label: 'Auto' },
  ];

  const verAnalisisOptions = [
    { value: 'solo', label: 'Solo yo' },
    { value: 'entrenador', label: 'Mi entrenador' },
    { value: 'equipo', label: 'Mi equipo' },
    { value: 'todos', label: 'Todos' },
  ];

  const handleGeneralChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePrivacidadChange = (field, value) => {
    setPrivacidadData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    // También guardar cambios de privacidad rápida
    showToast('✓ Configuración general guardada correctamente.', 'success');
  };

  const handleCancel = () => {
    setFormData(config);
    setPrivacidadData(privacidadConfig);
    showToast('Cambios descartados.', 'info');
  };

  return (
    <section className="config-section active" aria-labelledby="title-general">
      <div className="config-section__split">
        <div className="config-main-col">
          <h2 className="config-section__title" id="title-general">General</h2>

          <SelectField
            id="unidadMedida"
            label="Unidad de medida"
            value={formData.unidadMedida}
            onChange={(val) => handleGeneralChange('unidadMedida', val)}
            options={unidadOptions}
          />

          <SelectField
            id="idioma"
            label="Idioma"
            value={formData.idioma}
            onChange={(val) => handleGeneralChange('idioma', val)}
            options={idiomaOptions}
          />

          <SelectField
            id="tema"
            label="Tema"
            value={formData.tema}
            onChange={(val) => handleGeneralChange('tema', val)}
            options={temaOptions}
          />

          <SelectField
            id="calidadVideo"
            label="Calidad de video para análisis"
            value={formData.calidadVideo}
            onChange={(val) => handleGeneralChange('calidadVideo', val)}
            options={calidadOptions}
            size="sm"
          />

          <ToggleSwitch
            id="guardarVideos"
            label="Guardar videos automáticamente"
            description="Los videos de análisis se guardan en tu historial"
            checked={formData.guardarVideos}
            onChange={(val) => handleGeneralChange('guardarVideos', val)}
          />

          <div className="form-actions">
            <button className="btn btn--secondary" type="button" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="btn btn--primary" type="button" onClick={handleSave}>
              Guardar cambios
            </button>
          </div>
        </div>

        <aside className="quick-privacy" aria-label="Privacidad rápida">
          <h3 className="quick-privacy__title">Privacidad rápida</h3>

          <SelectField
            id="verAnalisis"
            label="Quién puede ver mis análisis"
            value={privacidadData.verAnalisis}
            onChange={(val) => handlePrivacidadChange('verAnalisis', val)}
            options={verAnalisisOptions}
          />

          <ToggleSwitch
            id="permitirComentarios"
            label="Permitir comentarios"
            checked={privacidadData.permitirComentarios}
            onChange={(val) => handlePrivacidadChange('permitirComentarios', val)}
          />

          <ToggleSwitch
            id="compartirProgreso"
            label="Compartir progreso"
            checked={privacidadData.compartirProgreso}
            onChange={(val) => handlePrivacidadChange('compartirProgreso', val)}
          />

          <hr className="divider" />

          <button className="btn btn--logout" type="button" onClick={onLogout}>
            Cerrar sesión
          </button>
        </aside>
      </div>
    </section>
  );
};

export default GeneralSection;