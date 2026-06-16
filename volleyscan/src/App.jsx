import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UsuarioLayout from './layout/UsuarioLayout'
import EntrenadorLayout from './layout/EntrenadorLayout'
import Perfil from './pages/panel_usuario/Perfil'
import Rutinas from './pages/panel_usuario/Rutinas'
import Historial from './pages/panel_usuario/Historial'
import Contenido from './pages/panel_usuario/Contenido'
import Progreso from './pages/panel_usuario/Progreso'
import Analisis from './pages/panel_usuario/Analisis'
import Notificaciones from './pages/panel_usuario/Notificaciones'
import Configuracion from './pages/panel_usuario/Configuración'
import Home from './pages/Home'
import Login from './pages/login/Login'
import Recuperacion from './assets/Auth/Recuperacion/Recuperacion'
import Registro from './assets/Auth/Registro/Registro'
import DashboardEntrenador from './pages/panel_entrenador/DashboardEntrenador'
import DashboardAdmin from './pages/Dashboard/DashboardAdmin'
import Gestion from './pages/panel_entrenador/Gestion'
import Horario from './pages/panel_entrenador/Horario'
import Estadisticas from './pages/panel_entrenador/Estadisticas'
import Reportes from './pages/panel_entrenador/Reportes'
import PerfilEntrenador from './pages/panel_entrenador/Perfil'
import Analisisentrenador from './pages/panel_entrenador/Analisis'
import Rutinasentrenador from './pages/panel_entrenador/Rutinas'
import Configuracionentrenador from './pages/panel_entrenador/Configuracion'
export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperacion" element={<Recuperacion />} />
          <Route path="/registro" element={<Registro />} />

          {/* Panel usuario */}
          <Route path='/usuario' element={<UsuarioLayout />}>
            <Route index element={<DashboardAdmin />} />
            <Route path='perfil' element={<Perfil />} />
            <Route path='rutinas' element={<Rutinas />} />
            <Route path='historial' element={<Historial />} />
            <Route path='contenido' element={<Contenido />} />
            <Route path='progreso' element={<Progreso />} />
            <Route path='analisis' element={<Analisis />} />
            <Route path='notificaciones' element={<Notificaciones />} />
            <Route path='configuracion' element={<Configuracion />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

          {/* Panel entrenador */}
          <Route path='/entrenador' element={<EntrenadorLayout />}>
            <Route index element={<DashboardEntrenador />} />
            <Route path='perfil' element={<PerfilEntrenador />} />
            <Route path='gestion' element={<Gestion />} />
            <Route path='horario' element={<Horario />} />
            <Route path='estadisticas' element={<Estadisticas />} />
            <Route path='rutinas' element={<Rutinasentrenador />} />
            <Route path='reportes' element={<Reportes />} />
            <Route path='analisis' element={<Analisisentrenador />} />
            <Route path='configuracion' element={<Configuracionentrenador />} />
          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  )
}