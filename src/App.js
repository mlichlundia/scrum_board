import './App.css'
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
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
        <Svg name="logo" />
        <div className="switcher">
          <Switcher />
        </div>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? 'active-route sign-up' : 'inactive-route sign-up'
          }
        >
          <h4>Sign Up</h4>
        </NavLink>
        <nav>
          <div className="main-menu-section">
            <ul className="menu">
              {menuPoints.map(({ title, direction, svg }) => (
                <li className="menu__point" key={svg}>
                  <NavLink
                    to={direction}
                    className={({ isActive }) =>
                      isActive
                        ? 'menu__active-route route'
                        : 'inactive-route route'
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
          <div className="login">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'active-route login__route'
                  : 'inactive-route login__route'
              }
            >
              <Svg name="login" />
              <h4>Login</h4>
            </NavLink>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default App
