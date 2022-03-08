import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import {
  // BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import App from './App'
import TaskBoard from './routes/TaskBoard/TaskBoard'
import Description from './routes/Description/Description'
import Register from './routes/Register/Register'
import Login from './routes/Login/Login'
import PageNotFound from './routes/PageNotFound/PageNotFound'
import { BoardProvider } from './routes/TaskBoard/context/boardContext'
import { ThemeContextProvider } from './context/themeContext'
import { ErrorNotificationContextProvider } from './context/ErrorNotificationContext'
import { IsAuthorizedProvider } from './context/IsAuthorizedContext'

ReactDOM.render(
  <IsAuthorizedProvider>
    <ErrorNotificationContextProvider>
      <ThemeContextProvider>
        <BoardProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="task-board" element={<TaskBoard />}></Route>
                <Route path="description" element={<Description />}></Route>
                <Route path="register" element={<Register />}></Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
                <Route path="/" element={<Navigate to="login" />} />
              </Route>
            </Routes>
          </HashRouter>
        </BoardProvider>
      </ThemeContextProvider>
    </ErrorNotificationContextProvider>
  </IsAuthorizedProvider>,
  document.getElementById('root'),
)

reportWebVitals()
