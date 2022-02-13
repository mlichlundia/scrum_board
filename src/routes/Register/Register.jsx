import React from 'react'
import { useContext } from 'react'
import axios from 'axios'
import './Register.css'
import { API_BASE_URL } from '../../constants/api.const'
import ThemeContext from '../../context/themeContext'
import { useForm } from 'react-hook-form'
import ErrorNotificationContext from '../../context/ErrorNotificationContext'
import Notification from '../../Notification/Notification'

export default function Registartion() {
  const { register, handleSubmit } = useForm()
  const { theme } = useContext(ThemeContext)
  const { setActiveErr, setError } = useContext(ErrorNotificationContext)

  function onSubmit(data) {
    const username = data.username
    const password = data.password
    axios
      .post(`${API_BASE_URL}/auth/signup`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res)
        alert('navigate to login')
      })
      .catch((err) => {
        console.error(err)
        setError(err.response.status)
        setActiveErr(err === '' ? false : true)
      })
  }

  return (
    <main>
      <form
        method="post"
        autoComplete="on"
        className="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="auth-header">Registration</h1>
        <section>
          <div className="form-field username-form-field">
            <label htmlFor="username"></label>
            <input
              {...register('username', { required: true })}
              className="input"
              name="username"
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div className="form-field password-form-field">
            <label htmlFor="password"></label>
            <input
              {...register('password', { required: true })}
              className="input"
              name="password"
              type="password"
              placeholder="Password"
            ></input>
          </div>
        </section>
        <section>
          <button
            className="form__button"
            style={theme === 'dark-theme' ? { color: 'var(--black)' } : {}}
            type="submit"
          >
            <p className="p1">Sign Up</p>
          </button>
        </section>
      </form>
      <Notification />
    </main>
  )
}
