import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Perfil from './pages/Perfil'
import Rutinas from './pages/Rutinas'
import Historial from './pages/Historial'
import Contenido from './pages/Contenido'
import Progreso from './pages/Progreso'
import Analisis from './pages/Analisis'
import Notificaciones from './pages/Notificaciones'

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route path='perfil' element={<Perfil/>}/>
          <Route path='rutinas' element={<Rutinas/>}/>
          <Route path='historial' element={<Historial/>}/>
          <Route path='contenido' element={<Contenido/>}/>
          <Route path='progreso' element={<Progreso/>}/>
          <Route path='analisis' element={<Analisis/>}/>
          <Route path='notificaciones' element={<Notificaciones/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}