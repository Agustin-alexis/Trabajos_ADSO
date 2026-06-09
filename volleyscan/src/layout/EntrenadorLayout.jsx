import { Outlet } from 'react-router-dom'
import Sidebar from '../../src/pages/panel_entrenador/components/Sidebar'
import '../layout/usuariolayout.css'

export default function UsuarioLayout() {
  return (
    <div className="usuario-layout">
      <Sidebar />
      <div className="usuario-layout__content">
        <Outlet />
      </div>
    </div>
  )
}