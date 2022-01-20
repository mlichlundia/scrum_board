import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import TaskBoard from './routes/TaskBoard/TaskBoard'
import Description from './routes/Description/Description'
import Register from './routes/Register/Register'
import Login from './routes/Login/Login'
import PageNotFound from './routes/PageNotFount/PageNotFound'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="task-board" element={<TaskBoard />}></Route>
        <Route path="description" element={<Description />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
