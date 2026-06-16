import { Outlet } from 'react-router-dom'
import SidebarEntrenador  from '../pages/panel_entrenador/components/Sidebar'
import '../layout/entrenadorlayout.css'

export default function EntrenadorLayout() {
  return (
    <div className="layout">
      <SidebarEntrenador />
      <div className="main-content-2">
        <Outlet />
      </div>
    </div>
  )
}