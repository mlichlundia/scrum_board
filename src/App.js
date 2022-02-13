import './App.css'
import { useContext } from 'react'
import { NavLink, Link, Outlet } from 'react-router-dom'
import AddShortcut from './buttons/AddShortcut/AddShortcut'
import Switcher from './buttons/Switcher/Switcher'
import ThemeContext from './context/themeContext'
import Svg from './svgs/Svg'

function App() {
  const { theme } = useContext(ThemeContext)
  const menuPoints = [
    { title: 'Task Board', direction: '/task-board', svg: 'task-board' },
    { title: 'Description', direction: '/description', svg: 'description' },
  ]
  return (
    <div className={`App ${theme}`}>
      <div className="wrapper">
        <div className="switcher">
          <Switcher />
        </div>

        <nav>
          <div className="main-menu-section">
            <Svg name="logo" />
            <ul className="menu">
              {menuPoints.map(({ title, direction, svg }) => (
                <li className="menu__point" key={svg}>
                  <NavLink
                    to={direction}
                    className={({ isActive }) =>
                      isActive ? 'active-route' : 'inactive-route'
                    }
                  >
                    <Svg name={svg} />
                    <h4>{title}</h4>
                  </NavLink>
                </li>
              ))}
            </ul>
            <hr />
            <AddShortcut />
          </div>
          <div className="auth">
            <p className="p3">
              To use all functions of the App you have to
              <span className="auth__route">
                <Link to="/register" className="auth__route">
                  Register
                </Link>
              </span>
              or
              <span className="auth__route">
                <Link to="/login" className="auth__route">
                  Login
                </Link>
              </span>
            </p>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default App
