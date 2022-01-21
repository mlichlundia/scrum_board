import './App.css'
import {
  NavLink,
  Link,
  Outlet,
  // useNavigate,
  // useLocation,
  // useNavigate,
  useMatch,
} from 'react-router-dom'
import { useState } from 'react'
import AddShortcut from './buttons/AddShortcut/AddShortcut'
import Switcher from './buttons/Switcher/Switcher'

function App() {
  // const [anchorPosition, setAnchorPosition] = useState('menu__toggle')

  // function MenuPoint(props) {
  //   let match = useMatch({
  //     path: props.to,
  //     exact: props.activeOnlyWhenExact,
  //   })
  //   return (
  //     <NavLink
  //       to={props.to}
  //       className={match ? 'active-route' : 'inactive-route'}
  //     >
  //       {setAnchorPosition(
  //         match ? 'menu__toggle menu__toggle_bottom' : 'menu__toggle',
  //       )}
  //       {console.log(anchorPosition)}
  //       {props.children}
  //       <h4>{props.label}</h4>
  //     </NavLink>
  //   )
  // }

  // function moveAnchor() {
  //   console.log(1)
  //   let firstMenuPoint = document.querySelector('a')
  //   console.log(firstMenuPoint)
  //   if (firstMenuPoint.classList.contains('active-route')) {
  //     setAnchorPosition('menu__toggle menu__toggle_bottom')
  //   } else setAnchorPosition('menu__toggle')
  // }

  return (
    <div className="App">
      <div className="switcher">
        <Switcher />
      </div>

      <nav>
        <div className="main-menu-section">
          <svg
            className="menu__logo"
            width="139"
            height="24"
            viewBox="0 0 139 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.3636 17.4545C18.1711 17.4545 19.6364 15.9893 19.6364 14.1818C19.6364 12.3743 18.1711 10.9091 16.3636 10.9091C14.5562 10.9091 13.0909 12.3743 13.0909 14.1818C13.0909 15.9893 14.5562 17.4545 16.3636 17.4545Z"
              fill="#0F6BF3"
            />
            <path
              d="M43.04 21.008C41.0347 21.008 39.392 20.5493 38.112 19.632C36.8533 18.6933 36.1493 17.424 36 15.824H38.304C38.4107 16.8053 38.8693 17.6053 39.68 18.224C40.512 18.8213 41.6213 19.12 43.008 19.12C44.224 19.12 45.1733 18.832 45.856 18.256C46.56 17.68 46.912 16.9653 46.912 16.112C46.912 15.5147 46.72 15.024 46.336 14.64C45.952 14.256 45.4613 13.9573 44.864 13.744C44.288 13.5093 43.4987 13.264 42.496 13.008C41.1947 12.6667 40.1387 12.3253 39.328 11.984C38.5173 11.6427 37.824 11.1413 37.248 10.48C36.6933 9.79733 36.416 8.89067 36.416 7.76C36.416 6.90667 36.672 6.11733 37.184 5.392C37.696 4.66667 38.4213 4.09067 39.36 3.664C40.2987 3.23733 41.3653 3.024 42.56 3.024C44.4373 3.024 45.952 3.504 47.104 4.464C48.256 5.40267 48.8747 6.704 48.96 8.368H46.72C46.656 7.344 46.2507 6.52267 45.504 5.904C44.7787 5.264 43.776 4.944 42.496 4.944C41.3653 4.944 40.448 5.21067 39.744 5.744C39.04 6.27733 38.688 6.93867 38.688 7.728C38.688 8.41067 38.8907 8.976 39.296 9.424C39.7227 9.85067 40.2453 10.192 40.864 10.448C41.4827 10.6827 42.3147 10.9493 43.36 11.248C44.6187 11.5893 45.6213 11.92 46.368 12.24C47.1147 12.56 47.7547 13.0293 48.288 13.648C48.8213 14.2667 49.0987 15.088 49.12 16.112C49.12 17.0507 48.864 17.8933 48.352 18.64C47.84 19.3653 47.1253 19.9413 46.208 20.368C45.2907 20.7947 44.2347 21.008 43.04 21.008Z"
              fill="#596577"
            />
            <path
              d="M53.9125 12.016C53.9125 10.2027 54.2752 8.624 55.0005 7.28C55.7258 5.91467 56.7285 4.86933 58.0085 4.144C59.2885 3.39733 60.7498 3.024 62.3925 3.024C64.5472 3.024 66.3178 3.55733 67.7045 4.624C69.1125 5.69067 70.0192 7.14133 70.4245 8.976H68.0245C67.7258 7.71733 67.0752 6.736 66.0725 6.032C65.0912 5.30667 63.8645 4.944 62.3925 4.944C61.2192 4.944 60.1632 5.21067 59.2245 5.744C58.2858 6.27733 57.5392 7.07733 56.9845 8.144C56.4512 9.18933 56.1845 10.48 56.1845 12.016C56.1845 13.552 56.4512 14.8533 56.9845 15.92C57.5392 16.9867 58.2858 17.7867 59.2245 18.32C60.1632 18.8533 61.2192 19.12 62.3925 19.12C63.8645 19.12 65.0912 18.768 66.0725 18.064C67.0752 17.3387 67.7258 16.336 68.0245 15.056H70.4245C70.0192 16.848 69.1125 18.288 67.7045 19.376C66.2965 20.464 64.5258 21.008 62.3925 21.008C60.7498 21.008 59.2885 20.6453 58.0085 19.92C56.7285 19.1733 55.7258 18.128 55.0005 16.784C54.2752 15.4187 53.9125 13.8293 53.9125 12.016Z"
              fill="#596577"
            />
            <path
              d="M78.4015 6.384C78.8922 5.296 79.6388 4.45333 80.6415 3.856C81.6655 3.25867 82.9135 2.96 84.3855 2.96V5.296H83.7775C82.1562 5.296 80.8548 5.73333 79.8735 6.608C78.8922 7.48267 78.4015 8.944 78.4015 10.992V20.752H76.1615V3.28H78.4015V6.384Z"
              fill="#596577"
            />
            <path
              d="M104.491 3.28V20.752H102.251V17.68C101.739 18.768 100.95 19.6 99.8833 20.176C98.8166 20.752 97.6219 21.04 96.2993 21.04C94.2086 21.04 92.5019 20.4 91.1792 19.12C89.8566 17.8187 89.1952 15.9413 89.1952 13.488V3.28H91.4032V13.232C91.4032 15.1307 91.8726 16.5813 92.8112 17.584C93.7712 18.5867 95.0726 19.088 96.7152 19.088C98.4006 19.088 99.7446 18.5547 100.747 17.488C101.75 16.4213 102.251 14.8533 102.251 12.784V3.28H104.491Z"
              fill="#596577"
            />
            <path
              d="M132.005 2.96C134.053 2.96 135.717 3.61067 136.997 4.912C138.299 6.192 138.949 8.05867 138.949 10.512V20.752H136.741V10.768C136.741 8.86933 136.283 7.41867 135.365 6.416C134.448 5.41333 133.2 4.912 131.621 4.912C129.979 4.912 128.667 5.456 127.685 6.544C126.704 7.632 126.213 9.21067 126.213 11.28V20.752H124.005V10.768C124.005 8.86933 123.547 7.41867 122.629 6.416C121.712 5.41333 120.453 4.912 118.853 4.912C117.211 4.912 115.899 5.456 114.917 6.544C113.936 7.632 113.445 9.21067 113.445 11.28V20.752H111.205V3.28H113.445V6.288C114 5.2 114.789 4.37867 115.813 3.824C116.837 3.248 117.979 2.96 119.237 2.96C120.752 2.96 122.075 3.32267 123.205 4.048C124.357 4.77333 125.189 5.84 125.701 7.248C126.171 5.86133 126.971 4.80533 128.101 4.08C129.253 3.33333 130.555 2.96 132.005 2.96Z"
              fill="#596577"
            />
          </svg>

          <ul className="menu">
            <li className="menu__point">
              {/* <MenuPoint
                activeOnlyWhenExct={true}
                to="/task-board"
                label="TaskBoard"
              >
                <div className={anchorPosition}></div>

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
              </MenuPoint> */}
              <NavLink
                // activeOnlyWhenExact={true}
                to="/task-board"
                // onClick={moveAnchor}
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
                {/* <div className={anchorPosition}></div> */}
                <h4>Task Board</h4>
              </NavLink>
            </li>
            <li className="menu__point">
              {/* <MenuPoint to="/description" label="Description">
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
              </MenuPoint> */}
              <NavLink
                to="/description"
                // onClick={moveAnchor}
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
                <h4>Description</h4>
              </NavLink>
            </li>
            <hr />
            <AddShortcut />
          </ul>
        </div>
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
