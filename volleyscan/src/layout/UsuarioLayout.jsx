import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
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