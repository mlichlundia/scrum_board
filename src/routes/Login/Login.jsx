import axios from 'axios'
import { useState } from 'react'
import './Login.css'
import { API_BASE_URL } from '../../constants/api.const'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        console.log(res)
        sessionStorage.setItem('token', res.data.access_token)
        console.log(sessionStorage.getItem('token'))
        alert('Все хорошо')
      })
      .catch((err) => {
        console.error(err)
        alert('Все плохо')
      })
  }
  function handleChange(e) {
    e.target.name === 'username'
      ? setUsername(e.target.value)
      : setPassword(e.target.value)
  }

  return (
    <main>
      <form
        method="post"
        autoComplete="on"
        className="form"
        onSubmit={handleSubmit}
      >
        <h1 className="auth-header">Login</h1>
        <section>
          <div>
            <label htmlFor="username"></label>
            <input
              className="input"
              name="username"
              type="text"
              placeholder="Name"
              onChange={handleChange}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="password"></label>
            <input
              className="input"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              required
            ></input>
          </div>
        </section>
        <section>
          <button className="form__button" type="submit">
            <p1>Log In</p1>
          </button>
        </section>
      </form>
    </main>
  )
}
