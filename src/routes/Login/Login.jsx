import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import { API_BASE_URL } from '../../constants/api.const'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    axios
      .post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      })
      .then((res) => {
        // console.log(res)
        sessionStorage.setItem('token', res.data.access_token)
        // console.log(sessionStorage.getItem('token'))
        navigate('/task-board')
      })
      .catch((err) => {
        if (err === 401) alert('This user doesn`t exist')
        console.log(err)
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
              placeholder="Username"
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
