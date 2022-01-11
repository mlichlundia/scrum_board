import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Scrum Board App</h1>
      <nav>
        <NavLink
          to="/registration"
          className={({ isActive }) =>
            isActive ? 'active-route' : 'inactive-route'
          }
        >
          Registration
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'active-route' : 'inactive-route'
          }
        >
          Login
        </NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
