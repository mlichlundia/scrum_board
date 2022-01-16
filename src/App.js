import './App.css'
import { NavLink, Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import AddShortcut from './buttons/AddShortcut/AddShortcut'
import Switcher from './buttons/Switcher/Switcher'

function App() {
  const [togglePosition, setTogglePosition] = useState(false)

  return (
    <div className="App">
      <div className="switcher">
        <Switcher />
      </div>

      <nav>
        <ul className="menu">
          <li className="menu__point">
            <NavLink
              to="/task-board"
              onClick={() => {
                setTogglePosition('menu__toggle')
              }}
              className={({ isActive }) =>
                isActive ? 'active-route' : 'inactive-route'
              }
            >
              <svg
                className="menu__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17.5C12.1225 17.4479 13.89 16.7154 15.3025 15.3025C16.715 13.8896 17.4475 12.1221 17.5 10C17.4479 7.8775 16.7154 6.11 15.3025 4.6975C13.8896 3.285 12.1221 2.5525 10 2.5C7.8775 2.55208 6.11 3.28458 4.6975 4.6975C3.285 6.11042 2.5525 7.87792 2.5 10C2.55208 12.1225 3.28458 13.89 4.6975 15.3025C6.11042 16.715 7.87792 17.4475 10 17.5ZM10 18.75C7.52583 18.685 5.46521 17.829 3.81813 16.1819C2.17104 14.5348 1.315 12.4742 1.25 10C1.315 7.52583 2.17104 5.46521 3.81813 3.81813C5.46521 2.17104 7.52583 1.315 10 1.25C12.4742 1.315 14.5348 2.17104 16.1819 3.81813C17.829 5.46521 18.685 7.52583 18.75 10C18.685 12.4742 17.829 14.5348 16.1819 16.1819C14.5348 17.829 12.4742 18.685 10 18.75ZM14.5506 7.05062C14.681 6.93354 14.8308 6.875 15 6.875C15.1692 6.875 15.3156 6.93687 15.4394 7.06063C15.5631 7.18437 15.625 7.33083 15.625 7.5C15.625 7.66917 15.5665 7.81896 15.4494 7.94938L9.82438 13.5744C9.69396 13.6915 9.54417 13.75 9.375 13.75C9.20583 13.75 9.05604 13.6915 8.92562 13.5744L5.80062 10.4494C5.68354 10.319 5.625 10.1692 5.625 10C5.625 9.83083 5.68687 9.68437 5.81063 9.56063C5.93437 9.43688 6.08083 9.375 6.25 9.375C6.41917 9.375 6.56896 9.43354 6.69938 9.55062L9.375 12.2463L14.5506 7.05062Z"
                  fill="currentcolor"
                />
              </svg>
              <div className={togglePosition}></div>
              Task Board
            </NavLink>
          </li>
          <li className="menu__point">
            <NavLink
              to="/description"
              onClick={() => {
                setTogglePosition('menu__toggle menu__toggle_bottom')
              }}
              className={({ isActive }) =>
                isActive ? 'active-route' : 'inactive-route'
              }
            >
              <svg
                className="menu__icon"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.25 7.5H11.25V2.5H3.75V17.5H16.25V7.5ZM15.7425 6.25L12.5 3.0075V6.25H15.7425ZM3.125 1.25H12.5L17.5 6.25V18.125C17.5 18.3075 17.4415 18.4573 17.3244 18.5744C17.2073 18.6915 17.0575 18.75 16.875 18.75H3.125C2.9425 18.75 2.79271 18.6915 2.67563 18.5744C2.55854 18.4573 2.5 18.3075 2.5 18.125V1.875C2.5 1.6925 2.55854 1.54271 2.67563 1.42562C2.79271 1.30854 2.9425 1.25 3.125 1.25ZM6.25 10H13.75V11.25H6.25V10ZM6.25 6.25H9.375V7.5H6.25V6.25ZM6.25 13.75H13.75V15H6.25V13.75Z"
                  fill="currentcolor"
                />
              </svg>
              Description
            </NavLink>
          </li>
          <hr />
          <AddShortcut />
        </ul>
        <div className="auth">
          <p3>
            To use all functions of the App you have to
            <p1>
              <Link to="/register" className="auth__route">
                Register
              </Link>
            </p1>
            or
            <p1>
              <Link to="/login" className="auth__route">
                Login
              </Link>
            </p1>
          </p3>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
