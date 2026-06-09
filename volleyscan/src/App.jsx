import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UsuarioLayout from './layout/UsuarioLayout'
import EntrenadorLayout from './layout/EntrenadorLayout'
import Dashboard from './pages/Dashboard/Dashboard'
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
import Dashboard from './pages/panel_entrenador/Dashboard'



export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        
        <Routes>
          {/* Página de inicio → Login */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperacion" element={<Recuperacion />} />
          <Route path="/registro"  element={<Registro />} />



          {/* Panel usuario (con sidebar) */}
          <Route path='/usuario' element={<UsuarioLayout/>}>
            <Route index element={<Dashboard />}/>
            <Route path='perfil' element={<Perfil/>}/>
            <Route path='rutinas' element={<Rutinas/>}/>
            <Route path='historial' element={<Historial/>}/>
            <Route path='contenido' element={<Contenido/>}/>
            <Route path='progreso' element={<Progreso/>}/>
            <Route path='analisis' element={<Analisis/>}/>
            <Route path='notificaciones' element={<Notificaciones/>}/>
            <Route path='configuracion' element={<Configuracion/>}/>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

          {/*Panel entrenador */}
          <Route path='/entrenador' element={<EntrenadorLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/gestion" element={<Gestion />} />
            <Route path="/horario" element={<Horario />} />
            <Route path="/estadisticas" element={<Estadisticas />} />
            <Route path="/rutinas" element={<Rutinas />} />
            <Route path="/reportes" element={<Reportes />} />
            <Route path="/analisis" element={<Analisis />} />
            <Route path="/configuracion" element={<Configuracion />} />
          </Route>

          
        </Routes>
      </div>
    </BrowserRouter>
  )
}