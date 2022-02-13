import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { API_BASE_URL } from '../../constants/api.const'
import ThemeContext from '../../context/themeContext'
import { useForm } from 'react-hook-form'
import ErrorNotificationContext from '../../context/ErrorNotificationContext'
import Notification from '../../Notification/Notification'

export default function Login() {
  const { register, handleSubmit } = useForm()
  const { theme } = useContext(ThemeContext)
  const { setActiveErr, setError } = useContext(ErrorNotificationContext)

  let navigate = useNavigate()
  function onSubmit(data) {
    const username = data.username
    const password = data.password
    axios
      .post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        sessionStorage.setItem('token', res.data.access_token)
        console.log(sessionStorage.getItem('token'))
        navigate('/task-board')
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
        <h1 className="auth-header">Login</h1>
        <section>
          <div>
            <label htmlFor="username"></label>
            <input
              {...register('username', { required: true })}
              className="input"
              name="username"
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div>
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
            <p className="p1">Log In</p>
          </button>
        </section>
      </form>
      <Notification />
    </main>
  )
}
